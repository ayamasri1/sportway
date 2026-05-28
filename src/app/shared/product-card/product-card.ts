import { Component, Input } from '@angular/core';
import { Product } from '../../core/services/Product Service/product-service';
import { CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, ButtonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product: Product | null = null;
}
