import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../interfaces';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent implements OnInit {
  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
    .subscribe(notes => this.notes = notes);
  }

  addNote(note: Note): void {
    this.noteService.addNote(note).subscribe();
    this.notes = [
      note,
      ...this.notes
    ];
  }
}
