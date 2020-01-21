import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { TodoService } from './../todo.service';
import { todo } from './../models/todo-model';
import { ok } from 'assert';

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements OnInit {
    public listTodos: Observable<todo>;
    constructor(private router: Router, private todoService: TodoService) {}

    displayedColumns: string[] = ['title', 'state', 'edit', 'del'];
    allTodos: todo[];
    dataSource;

    ngOnInit() {
        this.todoService.list().subscribe(todos => (this.allTodos = todos));
        this.dataSource = new MatTableDataSource(this.allTodos);
        this.allTodos
            .sort((x, y) => {
                return x.id > y.id ? -1 : 1;
            })
            .sort((x, y) => {
                return x.state === y.state ? 0 : x.state ? 1 : -1;
            });
    }

    updateState(element) {
        if (this.allTodos.find(ele => ele === element).state) {
            this.allTodos.find(ele => ele === element).state = false;
        } else {
            this.allTodos.find(ele => ele === element).state = true;
        }
        this.dataSource = new MatTableDataSource(
            this.allTodos
                .sort((x, y) => {
                    return x.id > y.id ? -1 : 1;
                })
                .sort((x, y) => {
                    return x.state === y.state ? 0 : x.state ? 1 : -1;
                })
        );
    }

    editTodo(id) {
        this.router.navigate(['/edit', id]);
    }

    deleteTodo(id) {
        this.todoService.remove(id);
        this.dataSource = new MatTableDataSource(
            this.allTodos
                .sort((x, y) => {
                    return x.id > y.id ? -1 : 1;
                })
                .sort((x, y) => {
                    return x.state === y.state ? 0 : x.state ? 1 : -1;
                })
        );
    }
    goDetailTodo(id) {
        this.router.navigate(['/detail', id]);
    }
}
