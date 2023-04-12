import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToDoInMemoryDatabase } from './data/ToDoInMemoryDatabase';
import { HttpClientModule } from '@angular/common/http';
import { ToDoService } from './service/to-do.service';
import { ToDoAddElementComponent } from './to-do-add-element/to-do-add-element.component';

@NgModule({
  declarations: [
    ToDoListComponent,
    ToDoAddElementComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(ToDoInMemoryDatabase, { delay: 1000 })
  ],
  exports: [
    ToDoListComponent,
  ],
  providers: [ToDoService]
})
export class ToDoModule { }
