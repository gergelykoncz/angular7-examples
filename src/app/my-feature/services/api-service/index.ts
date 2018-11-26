import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApiService {
  fetchData(): Observable<string> {
    return of('Hello world!');
  }
}
