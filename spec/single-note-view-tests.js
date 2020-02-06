
(function testSingleNoteView() {
  var note = new Note('test')
  var singleNoteView = new SingleNoteView(note)
  assert.isTrue(singleNoteView.viewNote() === "<div>test</div>")
  console.log("testSingleNoteView passing")
})()