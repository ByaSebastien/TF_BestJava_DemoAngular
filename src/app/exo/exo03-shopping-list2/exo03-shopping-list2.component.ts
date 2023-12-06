import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-exo03-shopping-list2',
  templateUrl: './exo03-shopping-list2.component.html',
  styleUrls: ['./exo03-shopping-list2.component.scss']
})
export class Exo03ShoppingList2Component {

  productName: string = '';
  productQuantity: number = 1;

  constructor(
    private readonly _productService: ProductService
  ) { }

  add(): void {
    if (this.productName.trim() === '') {
      return;
    }
    if (this.productQuantity <= 0) {
      return;
    }
    let product: Product = { name: this.productName, quantity: this.productQuantity };
    this._productService.add(product);
    this.productName = '';
    this.productQuantity = 1;
  }
}
