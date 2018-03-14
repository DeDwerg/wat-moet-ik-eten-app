import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Gebruiker } from './gebruiker.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
  constructor(
    private http: HttpClient
  ) {
  }

  gebruiker: Gebruiker;

  checkLogin(gebruiker: Gebruiker): Observable<string> {
    this.gebruiker = gebruiker;
    return this.http
      .post<Response>('http://localhost:2703/login/gebruiker', this.gebruiker)
      .map((response: Response) => this.mapHttpResponse(response))
      .catch(this.handleErrorObservable);
  }

  private handleErrorObservable(error: Response | any) {
    return Observable.throw(error);
  }

  private mapHttpResponse(response: Response) {
    return this.gebruiker.naam;
  }
}
