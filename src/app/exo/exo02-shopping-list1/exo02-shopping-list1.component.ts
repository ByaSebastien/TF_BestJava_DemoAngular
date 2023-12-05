import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-exo02-shopping-list1',
  templateUrl: './exo02-shopping-list1.component.html',
  styleUrls: ['./exo02-shopping-list1.component.scss']
})
export class Exo02ShoppingList1Component {

  products: Product[] = [];
  productName: string = '';

  addProduct(): void {
    if (this.productName.trim() === '') {
      return;
    }
    let existingProduct = this.products?.find(p => p.name === this.productName);
    if (existingProduct) {
      existingProduct.quantity += 1
      this.productName = '';
      return;
    }
    let product = { name: this.productName, quantity: 1 };
    this.products?.push(product);
    this.productName = '';
  }

  delete(i: number): void {
    this.products.splice(i, 1);
  }
  plusOne(i: number): void {
    this.products[i].quantity += 1;
  }
  minusOne(i: number): void {
    this.products[i].quantity -= 1;
    if (this.products[i].quantity === 0) {
      this.products.splice(i, 1);
    }
  }
}
