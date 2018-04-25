import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Form } from '../app/form/form';
import { AppService } from '../app/app.service';
import { Gebruiker } from './gebruiker.model';
import { Gerecht } from './gerecht.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Form {
  gebruiker: Gebruiker;
  inlognaam: string;
  aanmakenFormulierZichtbaar: boolean;
  gerechten: Array<Gerecht>;
  randomGerecht: Gerecht;
  gerechtAanmakenZichtbaar: boolean;
  gerecht: Gerecht;

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
      Wachtwoord: [''],
      GerechtNaam: [''],
      Vlees: [''],
      Vis: [''],
      AantalPersonen: ['']
    });
    super.createForm();
  }

  submitForm() {
    this.gebruiker = {
      naam: this.form.get('Gebruikersnaam').value,
      wachtwoord: this.form.get('Wachtwoord').value
    };
    this.appService.checkLogin(this.gebruiker).subscribe((inlognaam: string) => {
      this.inlognaam = inlognaam;
      this.appService.getGerechten(this.gebruiker).subscribe((gerechten: Array<Gerecht>) => {
        this.gerechten = gerechten;
      });
    });
  }

  gebruikerAanmaken() {
    this.gebruiker = {
      naam: this.form.get('Gebruikersnaam').value,
      wachtwoord: this.form.get('Wachtwoord').value
    };
    this.appService.gebruikerAanmaken(this.gebruiker).subscribe((inlognaam: string) => {
      this.inlognaam = inlognaam;
      this.appService.getGerechten(this.gebruiker).subscribe((gerechten: Array<Gerecht>) => {
        this.gerechten = gerechten;
      });
    });
  }

  getRandomGerecht() {
    this.gebruiker = {
      naam: this.form.get('Gebruikersnaam').value,
      wachtwoord: this.form.get('Wachtwoord').value
    };
    this.appService.getRandomGerecht(this.gebruiker).subscribe((gerecht: Gerecht) => {
      this.randomGerecht = gerecht;
    });
  }

  gerechtAanmaken() {
    this.gerecht = {
      naam: this.form.get('GerechtNaam').value,
      vis: this.form.get('Vis').value || false,
      vlees: this.form.get('Vlees').value || false,
      aantalPersonen: Number(this.form.get('AantalPersonen').value) || 1,
      gebruikerId: undefined,
      vegetarisch: undefined
    };
    // this.appService.postNieuwGerecht(this.gerecht).subscribe
    console.log(this.gerecht);
  }
}

// v post nieuwe gebruiker
// v login gebruiker
// post gerecht
// v get gerecht (random)
// v get alle gerechten
// verwijder gerecht
