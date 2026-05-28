import { Component, signal } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DrawerModule } from 'primeng/drawer';
import { sideTabs } from '../../core/constants/sidebarTabs';
import { TreeModule, TreeNodeSelectEvent } from 'primeng/tree';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [IconFieldModule, InputIconModule, InputTextModule, DrawerModule, TreeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  cartVisibility= signal<boolean>(false);
  menuVisibility= signal<boolean>(false);
  categories = signal<TreeNode[]>(sideTabs);

  constructor(private router : Router) {}

  openCart() {
    this.cartVisibility.set(true);
  }

  openMenu(){
    this.menuVisibility.set(true);
  }

  getProductsByCategory(event: TreeNodeSelectEvent){
    this.menuVisibility.set(false);
    this.router.navigate(['/browseCategory' , event.node.parent?.data! , event.node.data!], {
    });
  }
}
