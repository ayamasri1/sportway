import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CategoryPage } from './layouts/category-page/category-page';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'browseCategory/:slug',
        component: CategoryPage
    }
];
