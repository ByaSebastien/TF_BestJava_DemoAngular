import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo06ServicesComponent } from './demo06-services.component';

describe('Demo06ServicesComponent', () => {
  let component: Demo06ServicesComponent;
  let fixture: ComponentFixture<Demo06ServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo06ServicesComponent]
    });
    fixture = TestBed.createComponent(Demo06ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
