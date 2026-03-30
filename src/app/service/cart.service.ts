import { computed, effect, Injectable, signal } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProduct = signal<IProduct[]>(this.loadFromStorage());
  readonly promoCodes = signal<string[]>([
    'shop.co',
    'Medok2010',
    'WhiteMaks',
    'Baryl348',
    'WINTER2026',
    'HELLO_ANGULAR',
    'DISCOUNT50',
  ]);
  promo = signal<boolean | null>(null);

  addToCart(product: IProduct) {
    const exists = this.cartProduct().find((p) => p.id === product.id);
    if (exists) {
      this.updateQuantity({ ...exists, quantity: exists.quantity + 1 });
    } else {
      this.cartProduct.update((products) => [...products, { ...product, quantity: 1 }]);
    }
  }

  private loadFromStorage(): IProduct[] {
    try {
      const cartData = localStorage.getItem('CartProduct');
      if (cartData) {
        return JSON.parse(cartData);
      }
      return [];
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return [];
    }
  }

  constructor() {
    effect(() => {
      localStorage.setItem('CartProduct', JSON.stringify(this.cartProduct()));
      this.discount();
    });
  }

  updateQuantity(updated: IProduct) {
    this.cartProduct.update((products) => products.map((p) => (p.id === updated.id ? updated : p)));
  }

  removeCart(id: number) {
    this.cartProduct.update((c) => c.filter((c) => c.id !== id));
  }

  inputReadonly = signal<boolean>(false);
  addPromo(val: string) {
    if (this.promoCodes().includes(val)) {
      this.promo.set(true);
      this.inputReadonly.set(true);
    }
  }

  subtotal = computed(() =>
    this.cartProduct().reduce((acc: number, p: IProduct) => acc + p.price * p.quantity, 0),
  );
  discount = computed(() =>
    this.cartProduct().reduce((acc: any, p: IProduct) => {
      const d = p.discount;
      if (!d) return 0;
      return Math.floor(acc + p.price * p.quantity - d / 100);
    }, 0),
  );
  deliveryFee = computed(() => {
    if (this.promo() === true) return 0;
    return Math.floor(this.subtotal() / 10);
  });
  total = computed(() => Math.floor(this.subtotal() - this.discount() + this.deliveryFee()));

  orderSummary = computed(() => [
    { name: 'Subtotal', value: this.subtotal(), prefix: '$' },
    { name: 'Discount (-20%)', value: this.discount(), prefix: '-$' },
    { name: 'Delivery Fee', value: this.deliveryFee(), prefix: '$' },
    { name: 'Total', value: this.total(), prefix: '$' },
  ]);
}
