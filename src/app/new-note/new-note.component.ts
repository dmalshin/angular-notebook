import { Component, OnInit } from '@angular/core';
import { Priority, Note } from '../interfaces';
import { NoteService } from '../note.service';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
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

    this.noteService.addNote(this.note as Note)
      .subscribe(newNote => {
        this.note = { ...this.defaultNote };
      });
  }
}
