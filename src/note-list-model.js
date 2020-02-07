(function(exports) {
  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.add = function(string) {
    var id = this.notes.length
    var note = new Note(string, id)
    this.notes.push(note)
  }

  NoteList.prototype.showNotes = function() {
    return this.notes;
  }

  exports.NoteList = NoteList
})(this)