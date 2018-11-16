import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment';

@Component({
  templateUrl: './ui.html'
})
export class AsyncComponent implements OnInit {
  public result$: Observable<any>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.result$ = this.httpClient.get(`${environment.githubApi}/repositories`);
  }
}
