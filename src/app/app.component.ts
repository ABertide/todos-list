import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'todos-list';
    navLinks = [
        { path: 'todos', label: 'All Todos' },
        { path: 'add', label: 'Add a Todo' },
    ];
}
