import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { Product, ProductService } from '../../services/Product Service/product-service';
import { CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-overview',
  imports: [CurrencyPipe, ButtonModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
  @Input() title: string = '';
  products= signal<Product[]>([]);

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  scrollAmount=300;

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getProducts().then((products: Product[])=>{
      this.products.set([...products.slice(0,12)]);
    })
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
