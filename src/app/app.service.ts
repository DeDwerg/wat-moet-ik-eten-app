import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Gebruiker } from './gebruiker.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Gerecht } from './gerecht.model';

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

  gebruikerAanmaken(gebruiker: Gebruiker): Observable<string> {
    this.gebruiker = gebruiker;
    return this.http
      .post<Response>('http://localhost:2703/post/gebruiker', this.gebruiker)
      .map((response: Response) => this.mapHttpResponse(response))
      .catch(this.handleErrorObservable);
  }

  getGerechten(gebruiker: Gebruiker): Observable<Gerecht[]> {
    // this.gebruiker = gebruiker
    return this.http
    .post<Gerecht[]>('http://localhost:2703/get/alle/gerechten', gebruiker)
    .map((response: Gerecht[]) => this.mapGerechtResponse(response))
    .catch(this.handleErrorObservable);
  }

  private mapGerechtResponse(response: Gerecht[]): Gerecht[] {
    const gerechten: Gerecht[] = [];
    response.forEach(gerecht => {
      gerechten.push(gerecht);
    });
    return gerechten;
  }

  // private mapFetchTijdsslotenResponse(response: TijdsslotResponse[]): Tijdsslot[] {
  //   const tijdssloten: Tijdsslot[] = [];
  //   response.forEach(tijdsslot => {
  //     tijdssloten.push({
  //       afspraakStart: new Date(tijdsslot.afspraakStart),
  //       afspraakEind: new Date(tijdsslot.afspraakEind),
  //       score: tijdsslot.score
  //     });
  //   });
  //   return tijdssloten;
  // }

  private handleErrorObservable(error: Response | any) {
    return Observable.throw(error);
  }

  private mapHttpResponse(response: Response) {
    return this.gebruiker.naam;
  }
}
