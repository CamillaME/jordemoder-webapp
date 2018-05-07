import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillOutSchemaComponent } from './fill-out-schema.component';

describe('FillOutSchemaComponent', () => {
  let component: FillOutSchemaComponent;
  let fixture: ComponentFixture<FillOutSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillOutSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillOutSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
