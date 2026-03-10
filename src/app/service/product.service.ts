import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { IReview } from '../interfaces/review.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private API = 'https://69af5399c8b37f499837e82f.mockapi.io/';

  getProducts() {
    return this.http.get<IProduct[]>(`${this.API}products`);
  }

  getReviews() {
    return this.http.get<IReview[]>(`${this.API}reviews`);
  }
}
