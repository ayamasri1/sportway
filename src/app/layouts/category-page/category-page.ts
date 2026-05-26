import { Component, OnInit, signal } from '@angular/core';
import { Tabs } from '../../shared/tabs/tabs';
import { Overview } from '../../shared/overview/overview';
import { CategoryService, Tab } from '../../core/services/Category Service/category-service';
import { Skeleton } from "../../shared/skeleton/skeleton";



@Component({
  selector: 'app-category-page',
  imports: [Tabs, Overview, Skeleton],
  templateUrl: './category-page.html',
  styleUrl: './category-page.css',
})
export class CategoryPage implements OnInit{
  subtabs = signal<Tab[]>([]);
  loading = signal<boolean>(true);

  constructor(private categoryService: CategoryService) {}

  async ngOnInit() {
    this.subtabs.set(await this.categoryService.getSubCategories(history.state.category.id));
    this.loading.set(false);
  }

  CategoryTitle = signal<string>(history.state.category.label);
}
