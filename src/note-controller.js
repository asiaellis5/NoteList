(function(exports) {
  function NoteController(){
    this.noteListView = new NoteListView()
    this.noteList = this.noteListView.noteList
  }

  NoteController.prototype.addNote = function(string) {
    this.noteList.add(string)
  }

  NoteController.prototype.viewNote = function() {
    return this.noteListView.display()
  }

  NoteController.prototype.insert = function() {
    var message = this.viewNote()
    var element = document.getElementById("app")

    element.innerHTML = message
  }

  exports.NoteController = NoteController
})(this);
  