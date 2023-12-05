import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo05InputOutputComponent } from './demo05-input-output.component';

describe('Demo05InputOutputComponent', () => {
  let component: Demo05InputOutputComponent;
  let fixture: ComponentFixture<Demo05InputOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo05InputOutputComponent]
    });
    fixture = TestBed.createComponent(Demo05InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
