import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environment';

export interface ICallResult {
  repositories: any[];
  users: any[];
}

@Component({
  templateUrl: './ui.html'
})
export class MultipleResultsComponent implements OnInit {
  public result$: Observable<ICallResult>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    const call1$ = this.httpClient.get(`${environment.githubApi}/repositories`);
    const call2$ = this.httpClient.get(`${environment.githubApi}/users`);
    this.result$ = combineLatest(call1$, call2$).pipe(
      map(([res1, res2]: [any[], any[]]) => ({
        repositories: res1,
        users: res2
      }))
    );
  }
}
