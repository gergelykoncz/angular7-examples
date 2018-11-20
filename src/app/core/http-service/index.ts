import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}
