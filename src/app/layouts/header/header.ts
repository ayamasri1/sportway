import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-header',
  imports: [IconFieldModule, InputIconModule, InputTextModule, DrawerModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  cartVisibility: boolean = false;

  openCart() {
    this.cartVisibility = true;
  }
}
