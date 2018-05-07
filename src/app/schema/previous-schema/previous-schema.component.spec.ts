import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousSchemaComponent } from './previous-schema.component';

describe('PreviousSchemaComponent', () => {
  let component: PreviousSchemaComponent;
  let fixture: ComponentFixture<PreviousSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
