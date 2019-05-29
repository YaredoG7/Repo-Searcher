import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoDiagramComponent } from './repo-diagram.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { D3Service } from '../../services/d3.service';

describe('RepoDiagramComponent', () => {
  let component: RepoDiagramComponent;
  let fixture: ComponentFixture<RepoDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoDiagramComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [D3Service]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
