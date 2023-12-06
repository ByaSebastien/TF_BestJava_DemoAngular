import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-exo03-enfant',
  templateUrl: './exo03-enfant.component.html',
  styleUrls: ['./exo03-enfant.component.scss']
})
export class Exo03EnfantComponent implements OnInit {

  products!: Product[];

  constructor(
    private readonly _productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this._productService.getAll();
  }

  minusOne(i: number): void {
    this._productService.minusOne(i);
  }
  plusOne(i: number): void {
    this._productService.plusOne(i);
  }
  delete(i: number): void {
    this._productService.delete(i);
  }

}
