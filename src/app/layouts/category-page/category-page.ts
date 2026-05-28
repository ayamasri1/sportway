import { Component, OnInit, signal } from '@angular/core';
import { Tabs } from '../../shared/tabs/tabs';
import { Overview } from '../../shared/overview/overview';
import { CategoryService, Tab } from '../../core/services/Category Service/category-service';
import { Skeleton } from "../../shared/skeleton/skeleton";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  imports: [Tabs, Overview, Skeleton],
  templateUrl: './category-page.html',
  styleUrl: './category-page.css',
})
export class CategoryPage implements OnInit{
  subtabs = signal<Tab[]>([]);
  loading = signal<boolean>(true);
  CategoryTitle = signal<string>('');

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.params.subscribe(async params =>{
      const category = params['categorySlug'];
      if(!category) return;
      this.loading.set(true);
      this.CategoryTitle.set(category.charAt(0).toUpperCase() + category.slice(1));
      this.subtabs.set(await this.categoryService.getSubCategories(category));
      this.loading.set(false);
    })
  }
}