import { TestBed, getTestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiSettingService } from './api.setting.service';
import { of } from 'rxjs';

describe('ApiSettingService', () => {
  let injector: TestBed;
  let service: ApiSettingService;
  let httpMock: HttpTestingController;
  const apiUrl = 'https://dummy.api.com';
  const dummyEndPoint1  = '/search/repositories?q=repoName&page=1';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiSettingService]
    });

    injector = getTestBed();
    service = injector.get(ApiSettingService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should set base url ', fakeAsync(() => {
    service.setUrl$(apiUrl);
    tick();
    service.getUrl$().subscribe(url => {
      expect(url).toMatch(apiUrl);
    });
  }));

  it('should return the correct endpoint', fakeAsync(() => {
    expect(service.APISetting().repos('repoName', 1))
    .toBe(dummyEndPoint1);
  }));

  it('should retrun base url combined with endpints ', fakeAsync(() => {

    service.setUrl$(apiUrl);
    tick();
    service.getApiUrl(dummyEndPoint1).subscribe(url => {
      expect(url).toBe(apiUrl + dummyEndPoint1);
    });
  }));

  it('should check searchRepo returns expected ', fakeAsync(() => {
    const repoNames = [
      { full_name: 'repo001', body: 'lorem lipsom', created: new Date() },
      {
        full_name: 'repo002',
        body: 'lorem lipsom1',
        created: new Date('2019-01-01')
      },
      {
        full_name: 'repo003',
        body: 'lorem lipsom2',
        created: new Date('2019-05-29')
      }
    ];


    spyOn(ApiSettingService.prototype, 'searchRepoName').and.returnValue(of(repoNames));
    tick();
    service.searchRepoName('repo001', 1).subscribe(repos => {
      expect(repos.length).toBe(3);
      expect(repos).toEqual(repoNames);
    });

  }));




});

