import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo02ShoppingList1Component } from './exo02-shopping-list1.component';

describe('Exo02ShoppingList1Component', () => {
  let component: Exo02ShoppingList1Component;
  let fixture: ComponentFixture<Exo02ShoppingList1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exo02ShoppingList1Component]
    });
    fixture = TestBed.createComponent(Exo02ShoppingList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
