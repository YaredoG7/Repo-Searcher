import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { GitRepoSearchComponent } from './git-repo-search.component';
import { RepoDiagramComponent } from './repo-diagram/repo-diagram.component';
import { D3Service } from '../services/d3.service';
import { SearchPageComponent } from './search-page/search-page.component';
import { ApiSettingService } from '../services/api.setting.service';
import { ZoomableDirective } from '../directives/zoomable.directive';
import { HeaderPanelComponent } from './shared/header-panel/header-panel.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IssuesPageComponent } from './issues-page/issues-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [CommonModule, RouterModule , BrowserModule, FormsModule, BrowserAnimationsModule],
    providers: [D3Service, ApiSettingService],
    declarations: [RepoDiagramComponent, GitRepoSearchComponent,
                   SearchPageComponent, ZoomableDirective,
                   HeaderPanelComponent, SideBarComponent, NotFoundComponent,
                   IssuesPageComponent,
                   LandingPageComponent],
    exports: [GitRepoSearchComponent],
  })
  export class GitRepoSearchModule { }