import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChipModule } from 'primeng/chip';
import { Tab } from '../../services/Tab Service/tab-service';

@Component({
  selector: 'app-tabs',
  imports: [ChipModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
  @Input() tabs: Tab[] = [];

  constructor(private router: Router) {}

  selectTab(tab : Tab){
    this.router.navigate(['/browseCategory'], {
      state: {
        subtabs: tab
      }
    });
  }
}