import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NewNoteComponent,
    NoteListComponent,
    NotesContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
