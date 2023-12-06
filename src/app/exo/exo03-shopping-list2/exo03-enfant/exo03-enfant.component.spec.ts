import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo03EnfantComponent } from './exo03-enfant.component';

describe('Exo03EnfantComponent', () => {
  let component: Exo03EnfantComponent;
  let fixture: ComponentFixture<Exo03EnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exo03EnfantComponent]
    });
    fixture = TestBed.createComponent(Exo03EnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
