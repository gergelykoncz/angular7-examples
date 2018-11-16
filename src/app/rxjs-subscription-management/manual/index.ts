import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  templateUrl: './ui.html'
})
export class ManualComponent implements OnInit, OnDestroy {
  private sub$: Subscription;
  public result: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.sub$ = this.httpClient
      .get('http://github.com')
      .pipe(tap(res => (this.result = res)))
      .subscribe();
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
