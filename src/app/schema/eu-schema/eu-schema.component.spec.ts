import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuSchemaComponent } from './eu-schema.component';

describe('EuSchemaComponent', () => {
  let component: EuSchemaComponent;
  let fixture: ComponentFixture<EuSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
