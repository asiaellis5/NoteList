(function(exports) {
  function NoteListView() {
    this.noteList = new NoteList()
  }

  NoteListView.prototype.display = function() {
    var array = []
    for(var i = 0; i < this.noteList.notes.length; i++) {
      array.push("<div><a href='#" + this.noteList.notes[i].id + "'>" + this.noteList.notes[i].showNote().slice(0, 20) + "</a></div>")
    }
    return array.join("")
  }

  exports.NoteListView = NoteListView

})(this)