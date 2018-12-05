import { Component, Input } from '@angular/core';
import moment from 'moment';

import { Note, Priority } from '../interfaces';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  @Input() notes: Note[];
  displayedColumns: string[] = ['name', 'priority', 'date'];

  constructor() { }

  formatDate(date: string): string {
    if (!date) {
      return '-';
    }

    return moment(date).format('DD.MM.YYYY');
  }

  formatPriority(priorityCode: Priority): string {
    switch (priorityCode) {
      case Priority.LOW:
        return 'низкий';
      case Priority.NORMAL:
        return 'нормальный';
      case Priority.HIGH:
        return 'высокий';
      default:
        return '-';
    }
  }
}
