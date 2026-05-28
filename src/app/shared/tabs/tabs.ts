import { Component, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private route : ActivatedRoute) {}

  ngOnChanges(changes: SimpleChanges){
    if (changes['tabs']) {
      console.log('tabs updated:', this.tabs);
    }
  }

  selectTab(tab : Tab){
    const paramCount = this.route.snapshot.paramMap.keys.length;
    console.log(paramCount);
    if (paramCount === 0){
      this.router.navigate(['/browseCategory/'+ tab.slug]);
    } else {
      this.router.navigate([tab.slug],{ relativeTo: this.route });
    }
    
  }
}