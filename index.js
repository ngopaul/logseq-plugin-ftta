/**
 * entry
 */
let verse_regex = "(?:[1-3]\\s*)?[A-Za-z][A-Za-z]+(.)?(\\s*\\d+:((?:\\d+[ab]?)(?:\\s*-\\s*\\d+[ab]?)?)(,(?:\\s+\\d+)(?:\\s*-\\s*\\d+[ab]?)?)*)(;\\s*\\d+:((?:\\d+[ab]?)(?:\\s*-\\s*\\d+[ab]?)?)(,(?:\\s+\\d+)(?:\\s*-\\s*\\d+[ab]?)?)*)*"

let books_in_order = [
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Job",
    "Psalms",
    "Proverbs",
    "Ecclesiastes",
    "Song of Solomon",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation",
]

let books = {
    "Genesis": ["gen", "genesis"],
    "Exodus": ["exo", "exodus", "exod"],
    "Leviticus": ["lev", "levi", "leviticus"],
    "Numbers": ["num", "numbers"],
    "Deuteronomy": ["deut", "deu", "deuteronomy"],
    "Joshua": ["josh", "joshua"],
    "Judges": ["judg", "judges"],
    "Ruth": ["ruth", "rut", "ru"],
    "1 Samuel": ["1 sam", "1sam"],
    "2 Samuel": ["2 sam", "2sam"],
    "1 Kings": ["1 kings", "1kings", "1k", "1 k"],
    "2 Kings": ["2 kings", "2kings", "2k", "2 k"],
    "1 Chronicles": ["1 chronicles", "1 chron", "1chron"],
    "2 Chronicles": ["2 chronicles", "2 chron", "2chron"],
    "Ezra": ["ezra", "ez"],
    "Nehemiah": ["nehemiah", "neh"],
    "Esther": ["esther", "esth"],
    "Job": ["job"],
    "Psalms": ["psalms", "psalm", "psa"],
    "Proverbs": ["proverbs", "prov"],
    "Ecclesiastes": ["ecclesiastes", "eccl", "ecc"],
    "Song of Solomon": ["song of solomon", "sos", "song", "ss"],
    "Isaiah": ["isaiah", "isa"],
    "Jeremiah": ["jeremiah", "jer"],
    "Lamentations": ["lamentations", "lam"],
    "Ezekiel": ["ezekiel", "ezek"],
    "Daniel": ["daniel", "dan"],
    "Hosea": ["hosea", "hos"],
    "Joel": ["joel", "joel"],
    "Amos": ["amos"],
    "Obadiah": ["obadiah", "obad"],
    "Jonah": ["jonah", "jon"],
    "Micah": ["micah", "mica"],
    "Nahum": ["nahum", "nahu", "nah"],
    "Habakkuk": ["habakkuk", "hab"],
    "Zephaniah": ["zephaniah", "zeph", "zep"],
    "Haggai": ["haggai", "hag"],
    "Zechariah": ["zechariah", "zech", "zec"],
    "Malachi": ["malachi", "mala", "mal"],
    "Matthew": ["matthew", "matt"],
    "Mark": ["mark"],
    "Luke": ["luke"],
    "John": ["john"],
    "Acts": ["acts"],
    "Romans": ["romans", "rom"],
    "1 Corinthians": ["1 corinthians", "1corinthians", "1 cor", "1cor"],
    "2 Corinthians": ["2 corinthians", "2corinthians", "2 cor", "2cor"],
    "Galatians": ["galatians", "gala", "gal"],
    "Ephesians": ["ephesians", "ephe", "eph"],
    "Philippians": ["philippians", "phil"],
    "Colossians": ["colossians", "col"],
    "1 Thessalonians": ["1 thessalonians", "1thessalonians", "1 thes", "1thes"],
    "2 Thessalonians": ["2 thessalonians", "2thessalonians", "2 thes", "2thes"],
    "1 Timothy": ["1 timothy", "1timothy", "1 tim", "1tim"],
    "2 Timothy": ["2 timothy", "2timothy", "2 tim", "2tim"],
    "Titus": ["titus", "tit"],
    "Philemon": ["philemon", "phil"],
    "Hebrews": ["hebrews", "heb"],
    "James": ["james"],
    "1 Peter": ["1 peter", "1peter", "1 pet", "1pet"],
    "2 Peter": ["2 peter", "2peter", "2 pet", "2pet"],
    "1 John": ["1 john", "1john", "1j"],
    "2 John": ["2 john", "2john", "2j"],
    "3 John": ["3 john", "2john", "2j"],
    "Jude": ["jude"],
    "Revelation": ["revelation", "rev"],
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

/**
 * Remove the portion marker (i.e. a or b) from a verseString
 * @param verseString{String}
 */
function removeVersePortionMarker(verseString) {
    if (verseString[verseString.length - 1] === 'b') {
        return verseString.slice(0, verseString.length-1);
    } else if (verseString[verseString.length - 1] === 'a') {
        return verseString.slice(0, verseString.length-1);
    }
    return verseString;
}

function getVerseBlockRef(book, chapter, verse) {
    /*
    Get the verse block reference for a book, chapter, and verse number
     */
    return "((b" + pad(book, 3) + "c" + pad(chapter, 3) +
        "-a" + pad(verse, 3) + "-b1b1-b1b1-b1b1b1b1b1b1))";
}

function getVerseTextBlockRef(verseBlockRef) {
    return verseBlockRef.replace("b1b1b1b1b1b1", "b1b1b1b1b1b2")
}

async function replaceContentWithVerseLinks(content) {
    /*
    Replace a string content, that contains verse references, to the same
     content, but with links to the references instead.
    Also return an array of links to the actual verse texts.
     */
    let matches = [...content.matchAll(verse_regex)];
    let new_content = "";
    let verse_texts = [];
    let previous_str_idx = 0;
    for (const match of matches) {
        logseq.App.showMsg("Found match: " + match[0]);
        let original_string_fragment = content.slice(previous_str_idx, match.index);
        new_content = new_content + (
            original_string_fragment[0] !== " " ? " " : ""
        ) + original_string_fragment + (
            original_string_fragment[original_string_fragment.length - 1] !== " " ? " " : ""
        );
        [verse_ref_link_i, verse_texts_i] = parseVerseReference(match[0]);
        // Add the reference link to the final string
        new_content = new_content + verse_ref_link_i;
        // Add all new verses to the verse_texts
        Array.prototype.push.apply(verse_texts, verse_texts_i);
        previous_str_idx = match.index + match[0].length;
    }
    let final_original_string_fragment = content.slice(previous_str_idx, content.length);
    new_content += (
        final_original_string_fragment[0] !== " " ? " " : ""
    ) + final_original_string_fragment;

    return [new_content, verse_texts];
}

function parseVerseReference(reference) {
    /*
    Converts a verse reference into a block reference to the verse.
    Also generates a list of block references to the actual text of the verses
    Args:
        string: a parseable, clean string that contains a single reference or reference block
            For example: Acts 2:3-10, Jer. 4:2
            Must be within a chapter. Cannot accept something like Matt 4:10-5:4.
            No multiple references. Only one reference at a time.
    Returns:
        [String, Array[String]], where the first is a reference to the Bible verse name, and
        the second is a list of strings that are references to every verse text
    Requires:
        Access to the logseq DB
    Throws:
        None
     */
    reference = reference.toLowerCase();

    // make a list of [book_num, chapter_num, verse_num]
    let reference_chunks = []

    // chapter_chunks chunks contains things like "3:1, 3-4, 11, 15-17" and "Rom. 1:3-4". The first verse chunk
    // must always contain the book reference
    let chapter_chunks = reference.split(";")

    // get the book name
    // Iterate through all the books to search for all the possible abbreviations of the book
    // names, to get the book name
    let book = ""
    var length_of_start = 0
    var leave_loop = false;
    for (const [key, shortenings] of Object.entries(books)) {
        for (const shortening of shortenings) {
            length_of_start = shortening.length;
            if (chapter_chunks[0].slice(0, length_of_start) === shortening) {
                book = key;
                leave_loop = true;
                break;
            }
        }
        if (leave_loop) {
            break;
        }
    }
    // Get book number
    let book_number = 0
    for (let i = 0; i < books_in_order.length; i++) {
        if (books_in_order[i] === book) {
            book_number = i + 1;
            break;
        }
    }
    if (book_number === 0) {
        logseq.App.showMsg("Could not parse book from reference '" + reference + "'", "error");
        throw EvalError
    }
    console.log("Book name: " + book);

    // chapter_chunks looks like this:
    // ["1 Cor. 1:30", "5:7b-8a", "10:3-4", "15:20, 45"]

    // remove the book name for the first verse_chunk
    chapter_chunks[0] = chapter_chunks[0].slice(length_of_start, chapter_chunks[0].length);
    if (chapter_chunks[0][0] === '.') {
        chapter_chunks[0] = chapter_chunks[0].slice(1, chapter_chunks[0].length);
    }
    console.log("Chapter chunks: " + chapter_chunks.toString())

    // now chapter_chunks looks like this:
    // [" 1:30", "5:7b-8a", "10:3-4", "15:20, 45"]

    // fill verse_chunks with verse fragments
    let verse_chunks = []
    for (const chapterChunk of chapter_chunks) {
        const splitUpChapterChunk = chapterChunk.split(",");
        console.log("Split up Chapter Chunk: " + splitUpChapterChunk);
        Array.prototype.push.apply(verse_chunks, splitUpChapterChunk);
    }
    console.log("Verse Chunks: " + verse_chunks.toString())

    // now verse_chunks looks like this:
    // [" 1:30", "5:7b-8a", "10:3-4", "15:20", " 45"]

    // add everything to reference chunks
    let current_chapter = 0
    let current_verse = 0
    for (const verseChunk of verse_chunks) {
        if (verseChunk.includes(":")) {
            // includes a chapter reference, extract that first
            let [chapterString, verseString] = verseChunk.split(":");
            current_chapter = parseInt(chapterString);
            if (verseString.includes("-")) {
                // handle multiple verses
                let [startVerseString, endVerseString] = verseString.split("-");
                startVerseString = removeVersePortionMarker(startVerseString);
                endVerseString = removeVersePortionMarker(endVerseString);
                let startVerseIndex = parseInt(startVerseString);
                let endVerseIndex = parseInt(endVerseString);
                for (let i = startVerseIndex; i <= endVerseIndex; i++) {
                    reference_chunks.push([book_number, current_chapter, i]);
                }
            } else {
                verseString = removeVersePortionMarker(verseString);
                current_verse = parseInt(verseString);
                reference_chunks.push([book_number, current_chapter, current_verse]);
            }
        } else {
            // doesn't include a chapter reference, use the current chapter
            let verseString = verseChunk;
            if (verseString.includes("-")) {
                // handle multiple verses
                let [startVerseString, endVerseString] = verseString.split("-");
                startVerseString = removeVersePortionMarker(startVerseString);
                endVerseString = removeVersePortionMarker(endVerseString);
                let startVerseIndex = parseInt(startVerseString);
                let endVerseIndex = parseInt(endVerseString);
                for (let i = startVerseIndex; i <= endVerseIndex; i++) {
                    reference_chunks.push([book_number, current_chapter, i]);
                }
            } else {
                verseString = removeVersePortionMarker(verseString);
                current_verse = parseInt(verseString);
                reference_chunks.push([book_number, current_chapter, current_verse]);
            }
        }
    }
    console.log("Reference Chunks: " + reference_chunks.toString())

    let verse_block_refs = []
    let verse_text_block_refs = []
    for (const referenceChunk of reference_chunks) {
        const verse_block_ref = getVerseBlockRef(referenceChunk[0], referenceChunk[1], referenceChunk[2]);
        verse_block_refs.push(verse_block_ref);
        verse_text_block_refs.push(getVerseTextBlockRef(verse_block_ref));
    }
    console.log("verse refs: " + verse_block_refs.toString());
    console.log("verse text refs: " + verse_text_block_refs.toString());

    return [verse_block_refs.join(", "), verse_text_block_refs]
}

async function addChildBlock(parent_block_uuid, value) {
    /*
    Adds a child block to the end of a parents set of children, with the given string value.
     */
    if (parent_block_uuid) {
        await logseq.Editor.getBlock(parent_block_uuid, {includeChildren: true}).then(parent_block => {
            // if the parent block has no child blocks
            if (parent_block.children.length === 0) {
                logseq.Editor.insertBlock(parent_block_uuid, value, {
                    sibling: false
                });
            }

            // if the parent block has 1+ children blocks
            else if (parent_block.children.length > 0) {
                // get the last child block form the current block and insert a sibling block underneath it
                last_block_uuid = parent_block.children[parent_block.children.length - 1].uuid;
                logseq.Editor.insertBlock(last_block_uuid, value, {
                    sibling: true
                });
            }
        });
    }
    else {
        logseq.UI.showMsg("No block selected", "warning");
    }
}

async function getChildBlockContent(parent_block_uuid, child_index) {
    /*
    Returns the content of the child_index-ed child of a parent block given the parent's uuid.
     */
    if (parent_block_uuid) {
        await logseq.Editor.getBlock(parent_block_uuid, {includeChildren: true}).then(parent_block => {
            // if the parent block has no child blocks
            if (parent_block.children.length === 0) {
                logseq.UI.showMsg("Block has no children", "warning");
            } else if (parent_block.children.length <= child_index) {
                logseq.UI.showMsg("Block doesn't have this many children", "warning");
            } else {
                return parent_block.children[child_index].content;
            }
        });
    }
    else {
        logseq.UI.showMsg("No block selected", "warning");
    }
}

function main() {
    logseq.App.showMsg('Successfully loaded FTTA notes plugin.');

    logseq.Editor.registerSlashCommand(
        'verse',
        async () => {
            const {content, uuid} = await logseq.Editor.getCurrentBlock()

            // logseq.App.showMsg(`
            //     [:div.p-2
            //       [:h1 "#${uuid}"]
            //       [:h2.text-xl "${content}"]]
            //   `)
            let [verse_link, child_verses] = await replaceContentWithVerseLinks(content);
            await logseq.Editor.updateBlock(uuid, verse_link);
        },
    )

    logseq.Editor.registerSlashCommand(
        'fullverse',
        async () => {
            const {content, uuid} = await logseq.Editor.getCurrentBlock()

            //       logseq.App.showMsg(`
            //   [:div.p-2
            //     [:h1 "#${uuid}"]
            //     [:h2.text-xl "${content}"]]
            // `)
            let [verse_link, child_verses] = await replaceContentWithVerseLinks(content);
            await logseq.Editor.updateBlock(uuid, verse_link);

            for (const childVerse of child_verses) {
                await addChildBlock(uuid, childVerse);
            }
        },
    )
}

// bootstrap
logseq.ready(main).catch(console.error)
// parseVerseReference("1 Cor. 1:30; 5:7b-8a; 10:3-4; 15:20");
