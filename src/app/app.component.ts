import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Form } from '../app/form/form';
import { AppService } from '../app/app.service';
import { Gebruiker } from './gebruiker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Form {
  gebruiker: Gebruiker;
  inlognaam: string;
  aanmaken: boolean;

  constructor(
    private fb: FormBuilder,
    private appService: AppService
  ) {
    super();
    this.createForm();
  }

  form: FormGroup;
  formErrors = {
  };
  validationMessages = {
  };

  protected createForm() {
    this.form = this.fb.group({
      Gebruikersnaam: [''],
      Wachtwoord: ['']
    });
    super.createForm();
  }

  submitForm() {
    this.gebruiker = {
      naam: this.form.get('Gebruikersnaam').value,
      wachtwoord: this.form.get('Wachtwoord').value
    };
    this.appService.checkLogin(this.gebruiker).subscribe((inlognaam: string) => {
      console.log(inlognaam);
      console.log(this.inlognaam);
      this.inlognaam = inlognaam;
      console.log(this.inlognaam);
    });
  }

  gebruikerAanmaken() {
    this.aanmaken = true;
    console.log('aangemaakt');
  }
}


// this.afspraakService.getAfspraak().subscribe((afspraak: Afspraak) => {
//   this.afspraak = afspraak;
//   this.determineInitialWeek();
//   this.fetchTijdssloten();
// }, (error) => {
//   console.error('Unhandled getAfspraak.error: ', error);
//   this.loading = false;
// });

// post nieuwe gebruiker
// v login gebruiker
// post gerecht
// get gerecht (random)
// get alle gerechten
// verwijder gerecht
