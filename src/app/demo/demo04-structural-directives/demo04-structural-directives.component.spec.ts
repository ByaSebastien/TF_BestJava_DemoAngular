import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo04StructuralDirectivesComponent } from './demo04-structural-directives.component';

describe('Demo04StructuralDirectivesComponent', () => {
  let component: Demo04StructuralDirectivesComponent;
  let fixture: ComponentFixture<Demo04StructuralDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo04StructuralDirectivesComponent]
    });
    fixture = TestBed.createComponent(Demo04StructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
