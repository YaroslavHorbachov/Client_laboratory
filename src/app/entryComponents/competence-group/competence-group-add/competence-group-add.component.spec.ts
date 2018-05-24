import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceGroupAddComponent } from './competence-group-add.component';

describe('CompetenceGroupAddComponent', () => {
  let component: CompetenceGroupAddComponent;
  let fixture: ComponentFixture<CompetenceGroupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceGroupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceGroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
