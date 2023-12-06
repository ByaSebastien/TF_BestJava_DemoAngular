import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly _products: Product[] = [];

  constructor() { }

  getAll(): Product[] {
    return this._products;
  }

  add(product: Product): void {
    let existingProduct = this._products.find(p => p.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
      return;
    }
    this._products.push(product);
  }

  delete(i: number): void {
    this._products.splice(i, 1);
  }

  plusOne(i: number): void {
    this._products[i].quantity += 1;
  }

  minusOne(i: number): void {
    this._products[i].quantity -= 1;
    if (this._products[i].quantity === 0) {
      this.delete(i);
    }
  }
}
