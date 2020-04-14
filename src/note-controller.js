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

  NoteController.prototype.showNoteOnClick = function() {
    var model = this.noteList
    window.addEventListener("hashchange", () => {
      var noteId = location.hash.split("#")[1]
      var text = model.notes[noteId].text
      document.getElementById("app").innerHTML = text
    })
  }

  NoteController.prototype.submitNote = function() {
    var element = document.getElementById("text")
    var controller = this
    element.addEventListener("submit", function(click){
      click.preventDefault()
      controller.addNote(click.srcElement.elements[0].value)
      controller.insert('app')
    })

  }



  exports.NoteController = NoteController

})(this);





  
