import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements OnInit {
    constructor() {}
    listTodos = [
        { title: 'first', description: 'tototo', state: false },
        { title: 'scd', description: 'tata', state: true },
        { title: 'fff', description: 'sss', state: false },
    ];
    displayedColumns: string[] = [
        'title',
        'description',
        'state',
        'edit',
        'del',
    ];
    dataSource = new MatTableDataSource(this.listTodos);
    ngOnInit() {}
}
