import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  inventoryStatus: string;
  category: string;
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 120,
      inventoryStatus: 'INSTOCK',
      image: 'headphones.jpg',
    },
    {
      id: 2,
      name: 'Running Shoes',
      category: 'Sports',
      price: 85,
      inventoryStatus: 'LOWSTOCK',
      image: 'shoes.jpg',
    },
    {
      id: 3,
      name: 'Smart Watch',
      category: 'Electronics',
      price: 200,
      inventoryStatus: 'INSTOCK',
      image: 'smartwatch.jpg',
    },
    {
      id: 4,
      name: 'Backpack',
      category: 'Accessories',
      price: 45,
      inventoryStatus: 'OUTOFSTOCK',
      image: 'backpack.jpg',
    },
    {
      id: 5,
      name: 'Gaming Mouse',
      category: 'Electronics',
      price: 60,
      inventoryStatus: 'INSTOCK',
      image: 'mouse.jpg',
    },
    {
      id: 6,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 120,
      inventoryStatus: 'INSTOCK',
      image: 'headphones.jpg',
    },
    {
      id: 7,
      name: 'Running Shoes',
      category: 'Sports',
      price: 85,
      inventoryStatus: 'LOWSTOCK',
      image: 'shoes.jpg',
    },
  ];

  getProducts(): Promise<Product[]> {
    return Promise.resolve(this.products);
  }
}
