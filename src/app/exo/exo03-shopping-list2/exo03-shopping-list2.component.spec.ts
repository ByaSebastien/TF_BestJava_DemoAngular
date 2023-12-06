import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo03ShoppingList2Component } from './exo03-shopping-list2.component';

describe('Exo03ShoppingList2Component', () => {
  let component: Exo03ShoppingList2Component;
  let fixture: ComponentFixture<Exo03ShoppingList2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exo03ShoppingList2Component]
    });
    fixture = TestBed.createComponent(Exo03ShoppingList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
