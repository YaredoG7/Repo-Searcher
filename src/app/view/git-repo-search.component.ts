import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-repo-search',
  templateUrl: './git-repo-search.component.html',
  styleUrls: ['./git-repo-search.component.scss']
})
export class GitRepoSearchComponent implements OnInit {

  public showBar: boolean;

  constructor() { }

  ngOnInit() {
  this.showBar = true;
  }

  hide() {
    this.showBar = false;
  }

}
