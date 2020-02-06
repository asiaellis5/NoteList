"use strict";

(function testNoteController() {
  var noteController = new NoteController()
  assert.isTrue(noteController.noteListView instanceof NoteListView)
  console.log('testNoteList passing')
})();

(function testAddNoteController() {
  var noteController = new NoteController()
  noteController.addNote('one')
  noteController.addNote('two')
  assert.isTrue(noteController.noteList.notes[0].showNote() === 'one')
  assert.isTrue(noteController.noteList.notes[1].showNote() === 'two')
  console.log('testAddNoteController passing')
})();

(function testViewNote() {
  var noteController = new NoteController()
  noteController.addNote('testOne')
  assert.isTrue(noteController.viewNote() === '<ul><li><div>testOne</div></li></ul>')
  console.log('testViewNote passing')
})();

(function testInsert() {
  var fakeDiv = {
    innerHTML: ""
  }
  var fakeDocument = {
    getElementById: function(){
      return fakeDiv
    }
  }
  var noteController = new NoteController(fakeDocument)
  noteController.addNote('testOne')
  noteController.insert("app")
  assert.isTrue(fakeDiv.innerHTML.includes('testOne'))
  console.log("testInsert passing")
})();

// function mockElement() {
//   var test = document.createElement("div")
//   test.id = "test"
//   document.body.appendChild(test)
//   console.log("Creating fake div")
// };