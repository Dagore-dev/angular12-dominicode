import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/pages/products/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: Product[] = []
  private cartSubject = new Subject<Product[]>()
  private totalSubject = new Subject<number>()
  private quantitySubject = new Subject<number>()

  constructor() { }

  getCartAction$(): Observable<Product[]> {
    return this.cartSubject.asObservable()
  }

  getTotalAction$(): Observable<number> {
    return this.totalSubject.asObservable()
  }

  getQuantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable()
  }

  updateCart(product: Product): void {
    this.addToCart(product)
    this.updateQuantity()
    this.updateTotal()
  }

  private updateTotal(): void {
    const total: number = this.products.reduce((acc, curr) => acc + curr.price, 0)
    this.totalSubject.next(total)
  }

  private updateQuantity(): void {
    const quantity: number = this.products.length
    this.quantitySubject.next(quantity)
  }

  private addToCart(product: Product): void {
    this.products.push(product)
    this.cartSubject.next(this.products)
  }

}
