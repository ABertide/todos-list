import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as TodoActions from './actions/todo.actions';

import * as fromTodoReducer from './reducers/todo-reducers';
import { createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { todo } from './models/todo-model';
import { AppState } from './app.state';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private allTodos;
    private todoById;
    constructor(private store: Store<AppState>) {
        this.allTodos = createSelector(fromTodoReducer.selectAll, entities => {
            return entities;
        });

        this.todoById = createSelector(
            fromTodoReducer.selectEntities,
            (entities: Dictionary<todo>, props: { id: number }) => {
                return entities[props.id];
            }
        );
    }

    public add(data: todo) {
        data.id = new Date().getTime();
        data.state = false;
        this.store.dispatch(new TodoActions.AddTodo(data));
    }

    public list() {
        return this.store.pipe(select(this.allTodos));
    }

    public remove(id: number) {
        this.store.dispatch(new TodoActions.RemoveTodo(id));
    }

    public getDetail(id: number) {
        return this.store.pipe(select(this.todoById, { id: id }));
    }

    public edit(id: number, changes: todo) {
        this.store.dispatch(new TodoActions.UpdateTodo(id, changes));
    }
}
