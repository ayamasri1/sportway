import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CategoryPage } from './category-page/category-page';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'browseCategory',
        component: CategoryPage
    }
];
