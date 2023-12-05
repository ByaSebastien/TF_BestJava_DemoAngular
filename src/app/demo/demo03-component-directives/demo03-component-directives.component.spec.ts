import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo03ComponentDirectivesComponent } from './demo03-component-directives.component';

describe('Demo03ComponentDirectivesComponent', () => {
  let component: Demo03ComponentDirectivesComponent;
  let fixture: ComponentFixture<Demo03ComponentDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo03ComponentDirectivesComponent]
    });
    fixture = TestBed.createComponent(Demo03ComponentDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
