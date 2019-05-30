import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitRepoSearchComponent } from './view/git-repo-search.component';
import { SearchPageComponent } from './view/search-page/search-page.component';
import { RepoDiagramComponent } from './view/repo-diagram/repo-diagram.component';
import { IssuesPageComponent } from './view/issues-page/issues-page.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { LandingPageComponent} from './view/landing-page/landing-page.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: GitRepoSearchComponent,
    children: [
      {
        path: 'dashboard',
        component: LandingPageComponent
      },
      {
        path: 'search',
        component: SearchPageComponent
      },
      {
        path: 'diagram',
        component: RepoDiagramComponent
      },
      {
        path: 'issues',
        component: IssuesPageComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'notfound',

  },
  {
    path: 'notfound',
    component: NotFoundComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
