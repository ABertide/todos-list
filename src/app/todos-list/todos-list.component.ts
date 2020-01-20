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
    // listTodos = [
    //     { title: 'first', description: 'tototo', state: false },
    //     { title: 'scd', description: 'tata', state: true },
    //     { title: 'fff', description: 'sss', state: false },
    // ];

    displayedColumns: string[] = [
        'title',
        'description',
        'state',
        'edit',
        'del',
    ];
    dataSource;

    ngOnInit() {
        this.listTodos = this.todoService.list().pipe();
        let data = [];
        this.listTodos.forEach(todo => {
            data.push(todo);
        });
        console.log(data);
        this.todoService
            .list()
            .subscribe(
                todos => (this.dataSource = new MatTableDataSource(todos))
            );
        // this.dataSource = new MatTableDataSource(data);
        console.log(this.dataSource);
        console.log('ok');
        // this.listTodos.sort(function(x, y) {
        //     return x.state === y.state ? 0 : x.state ? 1 : -1;
        // });
    }

    updateState(element) {
        // if (this.listTodos.find(ele => ele === element).state) {
        //     this.listTodos.find(ele => ele === element).state = false;
        // } else {
        //     this.listTodos.find(ele => ele === element).state = true;
        // }
        // this.dataSource = new MatTableDataSource(
        //     this.listTodos.sort(function(x, y) {
        //         return x.state === y.state ? 0 : x.state ? 1 : -1;
        //     })
        // );
    }

    editTodo(id) {
        console.log('Edit record ID>>>', id);
        this.router.navigate(['/edit', id]);
    }

    deleteTodo(id) {
        this.todoService.remove(id);
    }

    public trackByToodFun(index, item) {
        return item.id;
    }
}
