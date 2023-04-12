import { Injectable } from '@angular/core';
import { ToDoModel } from '../model/ToDoModel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private url = "api/toDoList";

  constructor(private httpClient: HttpClient) { }

  readonly toDoList$ = this.httpClient.get<ToDoModel[]>(this.url)
    .pipe(
      tap(x => console.log(JSON.stringify(x))),
      catchError(this.handleError)
    )

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.statusText}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.statusText}`;
    }
    return throwError(() => errorMessage);
  }
}
