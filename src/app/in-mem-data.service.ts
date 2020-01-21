import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDataService implements InMemoryDbService {
    createDb() {
        return [
            {
                id: 1,
                title: 'first todo',
                description: 'create project',
                state: false,
            },
            {
                id: 2,
                title: 'scd todo',
                description: 'write code',
                state: true,
            },
            {
                id: 3,
                title: 'third todo',
                description: 'finish',
                state: false,
            },
        ];
    }
}
