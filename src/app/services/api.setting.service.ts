import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { flatMap, map, catchError, filter, take } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSettingService {

  private urlSubject: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  setUrl$(value: string): void {
    this.urlSubject.next(value);
  }

  getUrl$(): Observable<string> {
    return this.urlSubject.asObservable();
  }

  getApiUrl(apiAddress: string): Observable<string> {
    return this.getUrl$().pipe(
      filter(url => url !== ''),
      take(1),
      map(url => `${url}${apiAddress}`)
    );
  }

  APISetting: any = () => {
    return {
      repos: (repoName: string, page: number) =>
        `/search/repositories?q=${repoName}&page=${page}`,
      issues: (repoName: string, page: number) =>
        `/repos/${repoName}/issues?${page}`
    };
  };

  searchRepoName( searchItem: string, page: number ): Observable<any> {
    return this.getApiUrl(this.APISetting().repos(searchItem, page))
      .pipe(
        flatMap(url => {
          return this.http.get<any>(url);
        })
      )
      .pipe(catchError(this.handleError));
    }

  getIssues(repoName: string, page: number): Observable<any[]> {
    // const urlCheck = url.split(/\s*(\{\/(number)\})\s*/g);
    return this.getApiUrl(this.APISetting().issues(repoName, page))
      .pipe(
        flatMap(url => {
          return this.http.get<any>(url);
        })
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.message}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(
      'I\'ve been given url ' + error.url + ' and got error code: ' +
        error.status +
        ' ' +
        error.statusText
    );
  }
}
