"use strict";

(function(exports) {
  function NoteController(doc = document){
    this.noteListView = new NoteListView()
    this.noteList = this.noteListView.noteList
    this.document = doc
  }

  NoteController.prototype.addNote = function(string) {
    this.noteList.add(string)
  }

  NoteController.prototype.viewNote = function() {
    return this.noteListView.display()
  }

  NoteController.prototype.insert = function(id) {
    var message = this.viewNote()
    var element = this.document.getElementById(id)
    
    element.innerHTML = message
  }

  exports.NoteController = NoteController
})(this);
  