import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReflectionComponent } from './edit-reflection.component';

describe('EditReflectionComponent', () => {
  let component: EditReflectionComponent;
  let fixture: ComponentFixture<EditReflectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReflectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
