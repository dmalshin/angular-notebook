import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Priority, Note } from '../interfaces';
import { NoteService } from '../note.service';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  @Output() addNote = new EventEmitter<Note>();
  defaultNote: Note = {
    name: '',
    priority: Priority.NORMAL,
    date: '',
  };
  note: Note = { ...this.defaultNote };

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  add(): void {
    if (!this.note.name.trim()) { return; }

    this.addNote.emit(this.note);
    this.note = { ...this.defaultNote };
  }
}
