import { Component, signal } from '@angular/core';
import { Tab } from '../services/Tab Service/tab-service';
import { Tabs } from '../shared/tabs/tabs';
import { Overview } from '../shared/overview/overview';

@Component({
  selector: 'app-category-page',
  imports: [Tabs, Overview],
  templateUrl: './category-page.html',
  styleUrl: './category-page.css',
})
export class CategoryPage {
  subtabs : Tab[] = history.state.subtabs.subTabs || [];

  CategoryTitle = signal<string>(history.state.subtabs.label);
}
