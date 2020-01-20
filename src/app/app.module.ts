import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { EditTodosComponent } from './edit-todos/edit-todos.component';

import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { todoReducers } from './reducers/todo-reducers';
@NgModule({
    declarations: [
        AppComponent,
        TodosListComponent,
        AddTodosComponent,
        EditTodosComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        StoreModule.forRoot({
            todos: todoReducers,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
