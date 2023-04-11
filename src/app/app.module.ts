import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToDoModule } from './features/to-do/to-do.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ToDoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
