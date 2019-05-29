import { Component, OnInit } from '@angular/core';
import { ApiSettingService } from '../../services/api.setting.service';
import { IssuesModel } from '../../models/issues-data.model';
@Component({
  selector: 'app-issues-page',
  templateUrl: './issues-page.component.html',
  styleUrls: ['./issues-page.component.scss']
})
export class IssuesPageComponent implements OnInit {

  private baseUrl = 'https://api.github.com';
  public issues: IssuesModel[];
  public showError: boolean;
  public errorMsg: string;
  private repoName = 'No-Repo-Name-Given';

  constructor(private api: ApiSettingService) {
    this.api.setUrl$(this.baseUrl);
   }

  ngOnInit() {

    const getRepoName = sessionStorage.getItem('repoName');
    if (getRepoName !== ''){
      this.repoName = getRepoName;
    }
    this.api.getIssues(this.repoName, 1).subscribe((data) => {
      this.issues = data.map(item => IssuesModel.adapt(item));
    }, (err) => {
       this.showError = true;
       this.errorMsg = err;
    });
  }


  goToIssuePage(url: string) {
     window.open(url, '_blank');
  }

}
