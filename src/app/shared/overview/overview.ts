import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { Product, ProductService } from '../../core/services/Product Service/product-service';
import { Skeleton } from "../skeleton/skeleton";
import { ProductCard } from "../product-card/product-card";
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';
import { Tab } from '../../core/services/Category Service/category-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  imports: [Skeleton, ProductCard, ButtonModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
  @Input() tabTitle: Tab | null = null;
  title: string = '';
  products= signal<Product[]>([]);
  loading = signal(true);

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  scrollAmount=300;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){}

  async ngOnInit(){
    this.title = this.tabTitle?.label || '';
    this.products.set(await this.productService.getProductsByCategory(this.tabTitle?.slug || ''));
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

  viewAll(){
    this.router.navigate([this.tabTitle?.slug],{ relativeTo: this.route });
  }
}
