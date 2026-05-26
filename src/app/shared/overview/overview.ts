import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { Product, ProductService } from '../../core/services/Product Service/product-service';
import { CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Skeleton } from "../skeleton/skeleton";

@Component({
  selector: 'app-overview',
  imports: [CurrencyPipe, ButtonModule, Skeleton],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
  @Input() title: string = '';
  products= signal<Product[]>([]);
  loading = signal(true);

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  scrollAmount=300;

  constructor(private productService: ProductService){}

  async ngOnInit(){
    this.products.set(await this.productService.getProductsByCategory(this.title));
    this.loading.set(false);
  }

  scrollLeft(){
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({
      left: - container.clientWidth * 0.8,
      behavior: 'smooth'
    })
  }

  scrollRight(){
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({
      left: container.clientWidth * 0.8,
      behavior: 'smooth'
    });
  }
}
