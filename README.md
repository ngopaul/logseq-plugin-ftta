## ftta-notes-plugin

This plugin provides an interface to auto link verses and hymns (tbd)
if you have the support files for logseq ftta notetaking.

### Running the Sample

- Settings > Advanced > Developer Mode. Close dialog.
- ... > Plugins
- `Load unpacked plugin` in Logseq Desktop client.

### Commands

- ```/fullverse```
  - limitation is that each time you want a verse to be
  referenced, it always needs to include the book name 
  (i.e. Acts 2:4; Acts 3:5 instead of Acts 2:4, 3:5)
  - Ask for the Bible database
- ```/verse```
  - Same limitation above
  - Ask for the Bible database
- ```/hymn```
  - Only replaces hymns of the form h#### or ns####
  - hymn database TODO