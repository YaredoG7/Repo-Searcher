import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiSettingService } from '../../services/api.setting.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IssuesPageComponent } from './issues-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('IssuesPageComponent', () => {
  let component: IssuesPageComponent;
  let fixture: ComponentFixture<IssuesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesPageComponent ],
      imports: [HttpClientTestingModule],
      providers: [ApiSettingService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
