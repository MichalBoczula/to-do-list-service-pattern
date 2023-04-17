import { Injectable } from '@angular/core';
import { ToDoModel } from '../model/ToDoModel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, throwError, Observable, combineLatest, map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private readonly url = "api/toDoList";

  private readonly initlaToDoList$ = this.httpClient.get<ToDoModel[]>(this.url)
    .pipe(
      tap(x => console.log(JSON.stringify(x))),
      catchError(this.handleError)
    );

  private readonly items: ToDoModel[] = [];

  private readonly additionalItems$: BehaviorSubject<ToDoModel[]> = new BehaviorSubject<ToDoModel[]>([]);

  private actualId!: number;

  toDoList$ = combineLatest([
    this.initlaToDoList$,
    this.additionalItems$
  ])
    .pipe(
      map(([todo, add]) => {
        const arr = todo.concat(add);
        this.actualId = arr.length;
        return arr;
      })
    ) as Observable<any>;

  constructor(private httpClient: HttpClient) { }

  addTask(task: ToDoModel): void {
    this.items.push(task);
    this.additionalItems$.next(this.items);
  }

  getActualId(): number {
    return this.actualId;
  }

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
