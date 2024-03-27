## ftta-notes-plugin

This plugin provides an interface to auto link verses and hymns (tbd)
if you have the support files for logseq ftta notetaking.

### Running the Sample

- Settings > Advanced > Developer Mode. Close dialog.
- ... > Plugins
- `Load unpacked plugin` in Logseq Desktop client.

### Commands

- ```/fullverse```
  - will replace the text of "Acts 2:34" with the link to the block called "Acts 2:34" and add as children links to the blocks which are its children (that is, the actual verse or verses if there are multiple)
- ```/verse```
  - only replace the text of "Acts 2:34" with the link to the block called "Acts 2:34"
- ```/dvembed```, which stands for "direct verse embed"
  - replace the text of "Acts 2:34" with the link to the block called "Acts 2:34", then add to the end of the same block an embed to that block (which ultimately displays the whole verse). For multiple verses, it will embed multiple verses within the same block in order.
- ```/cvembed```, which stands for "collapsed verse embed"
  - replace the text of "Acts 2:34" with the link to the block called "Acts 2:34"
  - then creates a child block called "Verses:", to which it add children containing embeds to those verse blocks (which ultimately displays the whole verse)
  - This child block will start collapsed, so it doesn't take up room
- ```/htitle```
  - TODO
  - Replace hymns of the form h#### (standard hymns), ns#### (new songs), lb#### (howard higashi), c#### (children) with a link to their page as well as the title of the hymn
- ```/hsearch```
  - TODO
  - opens a search panel to search through hymns for specific phrases. Upon selecting the phrase desired:
    - put a link to the hymn page at the end of the current block
    - put a link to the title of the hymn at the end of the current block
    - directly link the block with the given search phrase as a child

### Limitations and Notes

- Will link whole books! If you put "Acts 2" and run this, you're getting 47 verses! If you don't want this to happen but still want to type the name of a chapter alongside verses that need to be linked, write something like "Acts2" or "Acts-2" before running the command.
- Supports single chapter book style references, i.e. "2 John 2" means "2 John 1:2"
- Logseq doesn't support bolding or italicising around references, that is, "\*\*((reference))\*\*" does not render as the block's content.

### TODO 

- Support whole chapter references for single-chapter books ("2 John" should link as it it were "2 John 1-13")
- Add specific commands that ignore chapter references, only linking verse references
- Support "Galatians Chapter 4 Verse 1" style references
- Support automatic book carryover (when a book is mentioned earlier in a block or previous sibling blocks, use it as the book for a reference with no specified book), i.e. "The first four chapters of Galatians ... In this message we come to 5:1-6"
