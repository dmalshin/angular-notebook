import { Component, OnInit } from '@angular/core';
import { Priority } from '../interfaces';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  name = '';
  priority = Priority.NORMAL;
  date = '';

  constructor() { }

  ngOnInit() {
  }

  add(name: string): void {
    console.log(this.name);
  }
}
