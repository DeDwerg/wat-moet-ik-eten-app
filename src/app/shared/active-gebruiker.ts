import { Injectable } from '@angular/core';
import { Gebruiker } from '../gebruiker.model';

@Injectable()
export class ActiveGebruiker {

  constructor( ) {  }

  private gebruiker: Gebruiker;

  getGebruiker(): Gebruiker {
    return this.gebruiker;
  }

  setGebruiker(gebruiker: Gebruiker) {
    this.gebruiker = gebruiker;
  }

}
