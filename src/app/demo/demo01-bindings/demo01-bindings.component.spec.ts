import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo01BindingsComponent } from './demo01-bindings.component';

describe('Demo01BindingsComponent', () => {
  let component: Demo01BindingsComponent;
  let fixture: ComponentFixture<Demo01BindingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo01BindingsComponent]
    });
    fixture = TestBed.createComponent(Demo01BindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
