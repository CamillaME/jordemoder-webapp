import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousInternshipComponent } from './previous-internship.component';

describe('PreviousInternshipComponent', () => {
  let component: PreviousInternshipComponent;
  let fixture: ComponentFixture<PreviousInternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousInternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
