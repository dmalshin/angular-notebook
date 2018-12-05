import { Component, OnInit, OnChanges, Input, ViewChild, SimpleChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import * as moment from 'moment';

import { Note, Priority } from '../interfaces';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, OnChanges {
  @Input() notes: Note[];
  displayedColumns: string[] = ['name', 'priority', 'date'];
  dataSource = new MatTableDataSource<Note>(this.notes);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.notes && changes.notes.currentValue) {
      this.dataSource = new MatTableDataSource<Note>(changes.notes.currentValue);
      this.dataSource.paginator = this.paginator;
    }
  }

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
