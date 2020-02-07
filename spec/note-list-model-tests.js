"use strict";

(function testNoteList() {
  var noteList = new NoteList()
  assert.isTrue(noteList.notes.length === 0);
  console.log('testNoteList passing')
})();

(function testAddNoteList() {
  var notelist = new NoteList()
  notelist.add('hello')
  notelist.add('test')
  assert.isTrue(notelist.notes.length === 2)
  assert.isTrue(notelist.notes[0].showNote() === 'hello')
  assert.isTrue(notelist.notes[0].id === 0)
  assert.isTrue(notelist.notes[1].id === 1)
  console.log('addNoteList test passing')
})();