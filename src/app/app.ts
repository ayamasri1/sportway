import { Component, signal } from '@angular/core';
import { PageLayout } from './layouts/page-layout/page-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [PageLayout]
})
export class App {
  
}
