(function(exports) {
  function NoteListView() {
    this.noteList = new NoteList()
  }

  NoteListView.prototype.display = function() {
    var array = ["<ul>"]
    for(var i = 0; i < this.noteList.notes.length; i++) {
      array.push("<li><div><a href='#" + this.noteList.notes[i].id + "'>" + this.noteList.notes[i].showNote().slice(0, 20) + "</a></div></li>")
    }
    array.push("</ul>")
    return array.join("")
  }

  exports.NoteListView = NoteListView

})(this)