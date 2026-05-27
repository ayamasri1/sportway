import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CategoryPage } from './layouts/category-page/category-page';
import { SubcategoryPage } from './layouts/subcategory-page/subcategory-page';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'browseCategory/:categorySlug',
        component: CategoryPage,
    },
    {
        path: 'browseCategory/:categorySlug/:subcategorySlug',
        component: SubcategoryPage
    }
];
