import { Injectable } from '@angular/core';

export interface Tab{
  label: string;
  image: string;
  subTabs?: Tab[];
}

@Injectable({
  providedIn: 'root',
})
export class TabService {
  GenderSubtabs: Tab[] = [
    {
      label: "Shirts",
      image: " ",
    },
    {
      label: "Pants",
      image: " ",
    },
    {
      label: "Hoodies",
      image: " ",
    },
    {
      label: "Compression",
      image: " "
    },
    {
      label: "Jackets",
      image: " "
    },
    {
      label: "Shorts",
      image: " "
    },
    {
      label: "Sets",
      image: " "
    }
  ];
}
