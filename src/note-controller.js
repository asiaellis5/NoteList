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

(function listenForSubmit() {
  var element = document.getElementById("text")
  element.addEventListener("submit", function(click) {
    click.preventDefault()
    console.log(click.srcElement.elements[0].value)
    
  })
})();

// var noteController = new NoteController()
// noteController.addNote('testOne')
// noteController.addNote('textTwo')
// noteController.insert('app')


(function makeUrlChangeShowNote() {
  window.addEventListener("hashchange", showHTMLForCurrentPage);


function showHTMLForCurrentPage() {
  showNote(getHTMLFromUrl(window.location))
}

function getHTMLFromUrl(location) {
  return location.hash.split("#")[1]
}

function showNote(id) {
  document
    .getElementById("app")
    .innerHTML = noteController.noteList.showNotes(id)[id].showNote()
}
})();

  