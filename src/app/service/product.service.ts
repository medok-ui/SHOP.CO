import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';
import { IReview } from '../interfaces/review.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private API = 'https://69af5399c8b37f499837e82f.mockapi.io/';

  allProducts = signal<IProduct[]>([]);
  searchQuery = signal<string>('');

  filteredProducts = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    const products = this.allProducts();

    if (!q) return products;
    return products.filter((p) => p.name.toLowerCase().includes(q));
  });

  getProducts() {
    return this.http.get<IProduct[]>(`${this.API}products`).pipe(
      tap((products) => {
        this.allProducts.set(products);
      }),
    );
  }

  getReviews() {
    return this.http.get<IReview[]>(`${this.API}reviews`);
  }
}
