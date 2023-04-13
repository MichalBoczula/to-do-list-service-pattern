import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { ToDoModel } from "../model/ToDoModel";

@Injectable({
    providedIn: "root"
})
export class ToDoInMemoryDatabase implements InMemoryDbService {

    createDb() {
        const toDoList: ToDoModel[] = [
            {
                status: true,
                title: 'sleep',
                desc: 'waste of time'
            },
            {
                status: true,
                title: 'wake up',
                desc: 'coffee time'
            },
            {
                status: true,
                title: 'program',
                desc: 'create some app'
            },
            {
                status: false,
                title: 'exercise',
                desc: 'kick enemies in the face'
            },
            {
                status: false,
                title: 'learn',
                desc: 'how to programming better'
            },
        ];

        return { toDoList };
    }
}