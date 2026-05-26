import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ChipModule } from 'primeng/chip';
import { Tab } from '../../core/services/Category Service/category-service';

@Component({
  selector: 'app-tabs',
  imports: [ChipModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
  @Input() tabs: Tab[] = [];

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges){
    if (changes['tabs']) {
      console.log('tabs updated:', this.tabs);
    }
  }

  selectTab(tab : Tab){
    this.router.navigate(['/browseCategory/'+ tab.slug], {
      state: {
        category: tab
      }
    });
  }
}