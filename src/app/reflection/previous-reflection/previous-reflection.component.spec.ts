import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousReflectionComponent } from './previous-reflection.component';

describe('PreviousReflectionComponent', () => {
  let component: PreviousReflectionComponent;
  let fixture: ComponentFixture<PreviousReflectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousReflectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
