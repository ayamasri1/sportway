import { Injectable } from '@angular/core';
import { SupabaseService } from '../Supabase Service/supabase-service';

export interface Tab{
  id: string;
  label: string;
  imageUrl: string;
  slug: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(private supabase : SupabaseService){}

  async getCategories(){
    const { data, error } = await this.supabase.client
      .from('Category')
      .select('*');

    if (error) {
      throw error;
    }
    return data;
  }

  async getSubCategories(categoryId: string){
    const {data, error} = await this.supabase.client
      .from('SubCategory')
      .select('*')
      .eq('categoryId', categoryId);

    if (error){
      throw error;
    }
    return data;
  }
}
