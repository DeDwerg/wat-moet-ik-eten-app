import { Component, OnInit } from '@angular/core';
import { Form } from '../form/form';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Service } from '../shared/service';
import { Gebruiker } from '../gebruiker.model';
import { Router } from '@angular/router';
import { ActiveGebruiker } from '../shared/active-gebruiker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends Form implements OnInit {

  gebruiker: Gebruiker;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeGebruiker: ActiveGebruiker,
    private service: Service
  ) {
    super();
    this.createForm();
  }

  form: FormGroup;
  formErrors = {};
  validationMessages = {};

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
      wachtwoord: this.form.get('Wachtwoord').value,
    }
    this.service.checkLogin(this.gebruiker).subscribe((gebruiker: Gebruiker) => {
      this.activeGebruiker.setGebruiker(gebruiker);
      this.router.navigate(['overzicht']);
    });
  }

  ngOnInit() {

  }
}
