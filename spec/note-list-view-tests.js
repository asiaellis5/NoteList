(function testViewNote() {
  var noteListView = new NoteListView()
  var noteList = noteListView.noteList
  noteList.add('test test test test test test test')
  noteList.add('two')
  assert.isTrue(noteListView.display() === "<ul><li><div><a href='#0'>test test test test </a></div></li><li><div><a href='#1'>two</a></div></li></ul>")
  console.log("testViewNote passing")
})();


"https://content.guardianapis.com/search?api-key=eb7bc58f-215a-4dde-9ab0-61ed2768438d"