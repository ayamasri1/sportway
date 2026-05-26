import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-page-layout',
  imports: [Header, RouterOutlet],
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.css',
})
export class PageLayout {

}
