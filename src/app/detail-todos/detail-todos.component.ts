import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-detail-todos',
    templateUrl: './detail-todos.component.html',
    styleUrls: ['./detail-todos.component.scss'],
})
export class DetailTodosComponent implements OnInit {
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
    goBack() {
        this.router.navigate(['/todos']);
    }
}
