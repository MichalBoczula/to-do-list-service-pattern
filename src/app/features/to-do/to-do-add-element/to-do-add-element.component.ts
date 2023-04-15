import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ToDoModel } from '../model/ToDoModel';

@Component({
  selector: 'app-to-do-add-element',
  templateUrl: './to-do-add-element.component.html',
  styleUrls: ['./to-do-add-element.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoAddElementComponent {

  isActive: boolean = false;
  taskForm!: FormGroup;
  errors?: string[];

  constructor(private formBuilder: FormBuilder) { }

  activePanel() {
    this.isActive = true;
    this.taskForm = this.formBuilder.group({
      status: false,
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]]
    })
  }

  addTask() {
    if (this.taskForm.valid) {
      this.isActive = false;
      this.errors = undefined;

      const task: ToDoModel = this.taskForm.getRawValue();
      console.log(task);
    }
    else {
      this.errors = [];

      Object.keys(this.taskForm.controls).forEach(input => {
        const errorList = this.taskForm.get(input)?.errors;
        if (errorList != null) {
          Object.keys(errorList).forEach(error => {
            if (error === 'required') {
              this.errors?.push(`'${input.charAt(0).toUpperCase() + input.slice(1)}' is ${error}`);
            }
          });
        }
      });
    }
  }

  discard() {
    this.isActive = false;
    this.errors = undefined;
  }

  private cleanUpForm(): void {
    this.errors = undefined;
  }
}
