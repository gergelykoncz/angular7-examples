import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environment';
import { HttpService } from '@app/core';
import { Repo } from '@app/shared';

@Component({
  templateUrl: './ui.html'
})
export class SmartComponent implements OnInit {
  public result$: Observable<Repo[]>;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.result$ = this.httpService.get(`${environment.githubApi}/repositories`);
  }
}
