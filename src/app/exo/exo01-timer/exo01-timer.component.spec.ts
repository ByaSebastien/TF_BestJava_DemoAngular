import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo01TimerComponent } from './exo01-timer.component';

describe('Exo01TimerComponent', () => {
  let component: Exo01TimerComponent;
  let fixture: ComponentFixture<Exo01TimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exo01TimerComponent]
    });
    fixture = TestBed.createComponent(Exo01TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
