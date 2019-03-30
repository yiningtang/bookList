import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: '../book/book.module#BookModule'
    }
];
