import { Injectable, signal } from '@angular/core';
import { SupabaseService } from '../Supabase Service/supabase-service';

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  baseImage: string;
  availablestock: number;
  slug: string;
  SubCategory: {
    label: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private supabaseService : SupabaseService){}

  async getProductsByCategory(subcategory: string) {
    const {data, error} = await this.supabaseService.client
    .from('Product')
    .select(`
      id,
      name,
      brand,
      price,
      baseImage,
      availablestock,
      slug,
      SubCategory!inner(label)
    `)
    .eq('SubCategory.label', subcategory)
    .gt('availablestock', 0)
    .eq('isActive', true)
    .limit(7);

    if(error){
      throw error;
    }

    return data;
  }
}
