import { Component, OnInit } from '@angular/core';
import { todo } from '../models/todo-model';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-add-todos',
    templateUrl: './add-todos.component.html',
    styleUrls: ['./add-todos.component.scss'],
})
export class AddTodosComponent implements OnInit {
    public todo = <todo>{};
    constructor(private router: Router, private todoService: TodoService) {}

    ngOnInit() {}

    onSubmitAddForm(form) {
        //console.log('addRecords>>>>');
        // console.log(form);
        if (form.valid) {
            this.todoService.add(this.todo);
            this.router.navigate(['/todos']);
        } else {
            console.log('Form Invalid');
        }
    }
}
