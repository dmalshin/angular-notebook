import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Note } from './interfaces';
import { apiBase } from './config';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getNotes (): Observable<Note[]> {
    return this.http.get<Note[]>(apiBase);
  }

  addNote (note: Note): Observable<Note> {
    return this.http.post<Note>(apiBase, note);
  }
}
