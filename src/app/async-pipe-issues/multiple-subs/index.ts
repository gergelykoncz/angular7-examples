import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './ui.html'
})
export class MultipleSubscriptionsComponent implements OnInit {
  public callResult$: Observable<any>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.callResult$ = this.httpClient.get('https://api.github.com/repositories');
  }
}
