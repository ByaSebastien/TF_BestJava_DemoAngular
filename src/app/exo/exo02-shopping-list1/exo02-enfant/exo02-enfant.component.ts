import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-exo02-enfant',
  templateUrl: './exo02-enfant.component.html',
  styleUrls: ['./exo02-enfant.component.scss']
})
export class Exo02EnfantComponent {

  @Input() productList!: Product[];
  @Output() deleteEvent!: EventEmitter<number>;
  @Output() plusOneEvent!: EventEmitter<number>;
  @Output() minusOneEvent!: EventEmitter<number>;

  constructor() {
    this.deleteEvent = new EventEmitter<number>();
    this.plusOneEvent = new EventEmitter<number>();
    this.minusOneEvent = new EventEmitter<number>();
  }
}
