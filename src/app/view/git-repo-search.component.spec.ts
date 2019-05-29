import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GitRepoSearchComponent } from './git-repo-search.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GitRepoSearchComponent', () => {
  let component: GitRepoSearchComponent;
  let fixture: ComponentFixture<GitRepoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitRepoSearchComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitRepoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
