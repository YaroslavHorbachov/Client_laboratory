import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceGroupEditComponent } from './competence-group-edit.component';

describe('CompetenceGroupEditComponent', () => {
  let component: CompetenceGroupEditComponent;
  let fixture: ComponentFixture<CompetenceGroupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceGroupEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
