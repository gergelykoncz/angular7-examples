import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Component({
  templateUrl: './ui.html'
})
export class SubjectsComponent implements OnInit {
  public callResult$ = new BehaviorSubject<any[]>([]);

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get('https://api.github.com/repositories')
      .pipe(
        tap((res: any[]) => this.callResult$.next(res)),
        take(1)
      )
      .subscribe();
  }
}
