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
  randomGerecht: Gerecht;

  checkLogin(gebruiker: Gebruiker): Observable<Gebruiker> {
    this.gebruiker = gebruiker;
    return this.http
      .post<Gebruiker>('http://localhost:2703/login/gebruiker', this.gebruiker)
      .map((response: Gebruiker) => this.mapGebruikerResponse(response))
      .catch(this.handleErrorObservable);
  }

  gebruikerAanmaken(gebruiker: Gebruiker): Observable<Gebruiker> {
    this.gebruiker = gebruiker;
    return this.http
      .post<Gebruiker>('http://localhost:2703/post/gebruiker', this.gebruiker)
      .map((response: Gebruiker) => this.mapGebruikerResponse(response))
      .catch(this.handleErrorObservable);
  }

  getGerechten(gebruiker: Gebruiker): Observable<Gerecht[]> {
    return this.http
    .post<Gerecht[]>('http://localhost:2703/get/alle/gerechten', gebruiker)
    .map((response: Gerecht[]) => this.mapGerechtenResponse(response))
    .catch(this.handleErrorObservable);
  }

  getRandomGerecht(gebruiker: Gebruiker): Observable<Gerecht> {
    return this.http
    .post<Gerecht>('http://localhost:2703/get/random/gerecht', gebruiker)
    .map((response: Gerecht) => this.mapGerechtResponse(response))
    .catch(this.handleErrorObservable);
  }

  postNieuwGerecht(gerecht: Gerecht): Observable<Gerecht> {
    return this.http.post<Gerecht>('http://localhost:2703/post/gerecht', gerecht)
    .map((response: Gerecht) => this.mapGerechtResponse(response))
    .catch(this.handleErrorObservable);
  }

  private mapGerechtResponse(response: Gerecht): Gerecht {
    this.randomGerecht = this.responseToGerecht(response);
    return this.randomGerecht;
  }

  private responseToGerecht(response: Gerecht): Gerecht {
    const body = response;
    return {
      naam: body.naam,
      vis: body.vis,
      vlees: body.vlees,
      aantalPersonen: body.aantalPersonen,
      gebruikerId: body.gebruikerId,
      vegetarisch: body.vegetarisch,
      ingredienten: body.ingredienten
    };
  }

  private mapGerechtenResponse(response: Gerecht[]): Gerecht[] {
    const gerechten: Gerecht[] = [];
    response.forEach(gerecht => {
      gerechten.push(gerecht);
    });
    return gerechten;
  }

  private handleErrorObservable(error: Response | any) {
    return Observable.throw(error);
  }

  private mapGebruikerResponse(response: Gebruiker) {
    const gebruiker: Gebruiker = {
      naam: response.naam,
      wachtwoord: response.wachtwoord,
      id: response.id
    };
    return gebruiker;
  }
}
