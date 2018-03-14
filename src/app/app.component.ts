import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
}

// v post nieuwe gebruiker
// v login gebruiker
// post gerecht
// get gerecht (random)
// get alle gerechten
// verwijder gerecht
