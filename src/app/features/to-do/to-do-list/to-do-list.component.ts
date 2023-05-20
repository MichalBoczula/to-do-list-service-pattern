import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../service/to-do.service';
import { ToDoModel } from '../model/ToDoModel';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDoList!: ToDoModel[]
  loaded!: boolean;

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.toDoService.loaded$.subscribe(val => this.loaded = val);
    this.toDoService.toDoList$
      .subscribe(list => this.toDoList = list);
  }

  changeStatus(id: number): void {
    this.toDoList
      .filter(x => x.id === id)
      .map(x => x.status = !x.status);
  }
}
