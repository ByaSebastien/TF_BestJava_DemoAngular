import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo07FormulairesComponent } from './demo07-formulaires.component';

describe('Demo07FormulairesComponent', () => {
  let component: Demo07FormulairesComponent;
  let fixture: ComponentFixture<Demo07FormulairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo07FormulairesComponent]
    });
    fixture = TestBed.createComponent(Demo07FormulairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
