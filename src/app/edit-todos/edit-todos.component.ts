import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-edit-todos',
    templateUrl: './edit-todos.component.html',
    styleUrls: ['./edit-todos.component.scss'],
})
export class EditTodosComponent implements OnInit {
    private todoSub;
    public todo;
    private todoId: number;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private todoService: TodoService
    ) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.todoId = params['id'];
            const detail = this.todoService.getDetail(this.todoId);
            this.todoSub = detail.subscribe(res => {
                if (res !== undefined) {
                    this.todo = res;
                } else {
                    this.todo = {};
                }
            });
        });
    }
    onSubmitEditForm(form) {
        if (form.valid) {
            this.todoService.edit(this.todoId, this.todo);
            this.router.navigate(['/todos']);
        } else {
            console.log('Form Invalid');
        }
    }
    ngOnDestroy() {
        this.todoSub.unsubscribe();
    }
}
