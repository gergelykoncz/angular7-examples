import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environment';
import { HttpService } from '@app/core';

@Component({
  templateUrl: './ui.html'
})
export class AsyncComponent implements OnInit {
  public result$: Observable<any>;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.result$ = this.httpService.get(`${environment.githubApi}/repositories`);
  }
}
