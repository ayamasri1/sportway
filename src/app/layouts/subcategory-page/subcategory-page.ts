import { Component, OnInit, signal } from '@angular/core';
import { Skeleton } from "../../shared/skeleton/skeleton";
import { ProductCard } from "../../shared/product-card/product-card";
import { Product, ProductService } from '../../core/services/Product Service/product-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategory-page',
  imports: [Skeleton, ProductCard],
  templateUrl: './subcategory-page.html',
  styleUrl: './subcategory-page.css',
})
export class SubcategoryPage implements OnInit {

  loading = signal<boolean>(true);
  CategoryTitle = signal<string>('');
  products= signal<Product[]>([]);

  constructor(private productService: ProductService, private route: ActivatedRoute){}

  async ngOnInit(){
    this.route.params.subscribe(async params =>{
      const subCategory = params['subcategorySlug'];
      if(!subCategory) return;
      const title = subCategory.split('-').pop().charAt(0).toUpperCase() + subCategory.split('-').pop().slice(1);
      this.loading.set(true);
      this.CategoryTitle.set(title);
      this.products.set(await this.productService.getProductsByCategory(subCategory));
      this.loading.set(false);
    })
  }
}