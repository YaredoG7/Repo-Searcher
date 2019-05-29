import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiSettingService } from '../../services/api.setting.service';
import { SearchDataModel } from '../../models/search-data-model';
import { D3Service } from '../../services/d3.service';
import { fromEvent } from 'rxjs';
import { map, filter, debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  @ViewChild('repoNameInput') repoNameInput: ElementRef;
  private baseUrl = 'https://api.github.com';
  public repos: SearchDataModel[] = [];
  public isSearching: boolean;
  public repoName = '';
  public selectedRepo: SearchDataModel;
  public pageNumber = 1;

  constructor(private api: ApiSettingService, private d3Data: D3Service) {
                this.isSearching = false;
                this.api.setUrl$(this.baseUrl);
              }

  ngOnInit() {
    this.searchRepo();
  }

  searchRepo() {

    // onkey stroke get data from API but do not exceed rate limit!

    fromEvent(this.repoNameInput.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      })
      // set char length limit 
      , filter(res => res.length > 3)
      // time in ms between key events
      , debounceTime(1000)
      // if previous query is different from current
      , distinctUntilChanged()
      // subscribe for the response
    ).subscribe((text: string) => {
      this.isSearching = true;
      const formatName = text.trim().toLocaleLowerCase();
      this.api.searchRepoName(formatName, this.pageNumber)
      .subscribe((data) => {
       this.isSearching = false;
       this.repos = data.items.map(item => SearchDataModel.adapt(item));
       }, (err) => {
       this.isSearching = false;
       console.log(err)
     });
    })
  }


  loadMore() {
    this.pageNumber++;
    this.searchRepo();
  }

  /*
  findRepobyFullName(fullName: string){
    if(!fullName) return this.repos;
    return this.repos.filter(repo => repo.full_name.includes(fullName));
  }

  */

formatDate(date: Date) {
  if (date !== null ){
   return date.toDateString()
  }
}

getSelectedRepo(repo: SearchDataModel) {
  if (repo !== null || repo !== undefined) {
    this.selectedRepo = repo;
  }
}

sendRepoData(event: boolean) {

  if (event) {
    this.d3Data.sD3Data = this.selectedRepo.d3;
    sessionStorage.setItem('repoName', this.selectedRepo.fullName);
  }
}
}
