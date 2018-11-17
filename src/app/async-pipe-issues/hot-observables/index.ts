import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environment';

@Component({
  templateUrl: './ui.html'
})
export class HotObservableComponent implements OnInit {
  public clickHandler$: Observable<any>;

  ngOnInit() {
    const subject = new Subject();
    const request = new XMLHttpRequest();
    request.open('GET', `${environment.githubApi}/repositories`, true);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        subject.next(request.responseText);
      }
    };
    request.send();

    this.clickHandler$ = subject.pipe(map((responseText: string) => JSON.parse(responseText)));
  }
}
