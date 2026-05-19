import { Component, OnInit } from '@angular/core';
import { Tabs } from "../shared/tabs/tabs";
import { Overview } from "../shared/overview/overview";
import { Tab, TabService } from '../services/Tab Service/tab-service';

@Component({
  selector: 'app-home',
  imports: [Tabs, Overview],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  HomeTabs: Tab[] = [];

  constructor(private TabService: TabService){}

  ngOnInit(){
    this.HomeTabs = [
      {
        label: "Men",
        image: "https://www.quad-sports.com/cdn/shop/files/QUAD-Match-Padel-T-shirt-green-1.webp",
        subTabs: this.TabService.GenderSubtabs
      },
      {
        label: "Women",
        image: "https://www.quad-sports.com/cdn/shop/files/QUAD-Regular-T-shirt-off-white-1.webp",
        subTabs: this.TabService.GenderSubtabs
      },
      {
        label: "Kits",
        image: " "
      },
      {
        label: "Accessories",
        image: " "
      },
      {
        label: "Balls",
        image: " "
      },
      {
        label: "Equipment",
        image: " "
      },
      {
        label: "Shoes",
        image: " "
      },
      {
        label: "Trophies",
        image: " "
      },
      {
        label: "On Sale",
        image: " "
      },
      {
        label: "New Arrivals",
        image: " "
      }
    ]
  }
}
