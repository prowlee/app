Bugs
- Minor
    - masonry keyboard navigation unordered

Server
- Send screenshot without ?width, then in data/getscreenshot remove regex

Good to have
- Refactor collection/reorder redux to server
- Logic for moving to several parents in the end of the list
- Combined count on each level of collections tree
- data: combine logic of bookmarkMove and bookmarkReorder
- When collection removed open next collection
- Show (?) icon in Filters and Tags sidebar sections, click opens help page about those items
- bookmarks/item remove selectDisabled, and move this logic to /items + css
- Move all logic of Cover to Cloduflare worker

Changes
- data
    - filters reducer structure and selectors
    - tags reducer structure and selectors
    - bookmarks search now is string, not array!
    - bookmarks.importantSelected action arguments changed
    - test upload files!
    - new optionalDependencie: @sentry/minimal
    - makeHighlight selector changed, now have 3 arguments, instead 2
    - use 'global' spaceId to get global filters or tags
    - bookmarks
        - draftLoad, draftChange, draftCommit actions changed, first argument now can be id or link
        - no more draftEnsure, use draftLoad instead; instead { save } use { autoCreate }
        - be sure to change draft selectors too! instead object it accepts only 1 argument
            - status notFound now called 'new'
    - different image thumbnails/screenshots url format!
- features
    + nested collections showed up in one list
    + web preview better
    + batch remove, merge collections
    + better reorder of collections
    - create new collection fancy, reorderable
    + resizable sidebar
    + virtual list
    + fast batch bookmark actions
    + more reliable file upload
    + filters/tags in sidebar
    + caching
    - bug fixes
    + list cover position
    + unified search field
    + thumbnail optimized for transfer and speed
    + tags autocomplete shows tags from shared collection too
    + multiline description
    + import upload only new
    + pwa