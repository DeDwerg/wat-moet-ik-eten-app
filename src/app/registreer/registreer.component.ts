import { Component, OnInit } from '@angular/core';
import { Form } from '../form/form';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../shared/service';
import { Gebruiker } from '../gebruiker.model';
import { ActiveGebruiker } from '../shared/active-gebruiker';

@Component({
  selector: 'app-registreer',
  templateUrl: './registreer.component.html',
  styleUrls: ['./registreer.component.css']
})
export class RegistreerComponent extends Form implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: Service,
    private activeGebruiker: ActiveGebruiker
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
    const gebruiker: Gebruiker = {
      naam: this.form.get('Gebruikersnaam').value,
      wachtwoord: this.form.get('Wachtwoord').value
    };
    this.service.gebruikerAanmaken(gebruiker).subscribe((gebruiker: Gebruiker) => {
      this.activeGebruiker.setGebruiker(gebruiker);
      this.router.navigate(['overzicht']);
    });
  }

  ngOnInit() {
  }
}
