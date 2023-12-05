import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo05EnfantComponent } from './demo05-enfant.component';

describe('Demo05EnfantComponent', () => {
  let component: Demo05EnfantComponent;
  let fixture: ComponentFixture<Demo05EnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo05EnfantComponent]
    });
    fixture = TestBed.createComponent(Demo05EnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
