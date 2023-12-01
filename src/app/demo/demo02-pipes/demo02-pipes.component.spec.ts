import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo02PipesComponent } from './demo02-pipes.component';

describe('Demo02PipesComponent', () => {
  let component: Demo02PipesComponent;
  let fixture: ComponentFixture<Demo02PipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo02PipesComponent]
    });
    fixture = TestBed.createComponent(Demo02PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
