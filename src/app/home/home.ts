import { Component, OnInit, signal } from '@angular/core';
import { Tabs } from "../shared/tabs/tabs";
import { Overview } from "../shared/overview/overview";
import { CategoryService, Tab } from '../core/services/Category Service/category-service';
import { Skeleton } from "../shared/skeleton/skeleton";

@Component({
  selector: 'app-home',
  imports: [Tabs, Overview, Skeleton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  HomeTabs = signal<Tab[]>([]);
  loading = signal<boolean>(true);

  constructor(private categoryService: CategoryService){}

  async ngOnInit(){
    this.HomeTabs.set(await this.categoryService.getCategories());
    this.loading.set(false);
    console.log(this.HomeTabs());
  }
}
