import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-add-element',
  templateUrl: './to-do-add-element.component.html',
  styleUrls: ['./to-do-add-element.component.css']
})
export class ToDoAddElementComponent {

  isActive: boolean = false;

  activePanel() {
    this.isActive = true;
  }

  addTask() {
    this.isActive = false;
  }

  discard() {
    this.isActive = false;
  }
}
