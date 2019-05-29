import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchPageComponent } from './search-page.component';
import { D3Service } from '../../services/d3.service';


fdescribe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageComponent ],
      imports: [HttpClientTestingModule],
      providers: [D3Service]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check load more increment page size ', fakeAsync(() => {
    component.loadMore();
    tick();
    expect(component.pageNumber).toBeGreaterThan(1); 
  }));

  it('should format date to readable form', () => {
    const date = 'Wed May 29 2019';
    expect(component.formatDate(new Date('2019-05-29'))).toMatch(date);
  });

  it('should check data has been sent to be plotted', inject([D3Service], (service: D3Service) => {
    const fakeD3Data = { data: [{name: 'dummy-1', color: '#f231f1', value: 250}]};
    const d3Data = service.gD3Data;
    component.selectedRepo = {fullName: '', url: '', description: '', issuesUrl: '', createdAt: null, d3: fakeD3Data };

    // calling the metod
    component.sendRepoData(true);
    fixture.detectChanges();
    expect(d3Data).toBe(fakeD3Data);

  }));
});
