import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosListComponent } from './todos-list/todos-list.component';
import { EditTodosComponent } from './edit-todos/edit-todos.component';
import { AddTodosComponent } from './add-todos/add-todos.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { path: 'todos', component: TodosListComponent },
    { path: 'add', component: AddTodosComponent },
    { path: 'edit', component: EditTodosComponent },
    { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
