import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environment';

@Component({
  templateUrl: './ui.html'
})
export class ColdObservableComponent implements OnInit {
  public clickHandler$: Observable<any>;

  ngOnInit() {
    this.clickHandler$ = new Observable(observer => {
      const request = new XMLHttpRequest();
      request.open('GET', `${environment.githubApi}/repositories`, true);
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
          observer.next(request.responseText);
        }
      };
      request.send();
    }).pipe(map((responseText: string) => JSON.parse(responseText)));
  }
}
