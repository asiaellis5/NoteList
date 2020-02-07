(function testViewNote() {
  var noteListView = new NoteListView()
  var noteList = noteListView.noteList
  noteList.add('test test test test test test test')
  noteList.add('two')
  assert.isTrue(noteListView.display() === "<ul><li><div><a href='#0'>test test test test </a></div></li><li><div><a href='#1'>two</a></div></li></ul>")
  console.log("testViewNote passing")
})();