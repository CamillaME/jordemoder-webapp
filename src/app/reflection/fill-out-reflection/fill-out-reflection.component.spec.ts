import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillOutReflectionComponent } from './fill-out-reflection.component';

describe('FillOutReflectionComponent', () => {
  let component: FillOutReflectionComponent;
  let fixture: ComponentFixture<FillOutReflectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillOutReflectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillOutReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
