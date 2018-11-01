import { Component, OnInit } from '@angular/core';
import { Form } from '../form/form';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../shared/service';
import { Gebruiker } from '../gebruiker.model';

@Component({
  selector: 'app-registreer',
  templateUrl: './registreer.component.html',
  styleUrls: ['./registreer.component.css']
})
export class RegistreerComponent extends Form implements OnInit {

  gebruiker: Gebruiker;

  constructor(
    private fb: FormBuilder,
    private router: Router,
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
      wachtwoord: this.form.get('Wachtwoord').value
    };
    this.service.gebruikerAanmaken(this.gebruiker).subscribe((gebruiker: Gebruiker) => {
      this.gebruiker = gebruiker;
      this.router.navigate(['overzicht']);
    });
  }

  ngOnInit() {
  }

}


// gebruiker: Gebruiker;

// constructor(
//   private fb: FormBuilder,
//   private router: Router,
//   private service: Service
// ) {
//   super();
//   this.createForm();
// }

// form: FormGroup;
// formErrors = {};
// validationMessages = {};

// protected createForm() {
//   this.form = this.fb.group({
//     Gebruikersnaam: [''],
//     Wachtwoord: ['']
//   });
//   super.createForm();
// }

// submitForm() {
  // this.gebruiker = {
  //   naam: this.form.get('Gebruikersnaam').value,
  //   wachtwoord: this.form.get('Wachtwoord').value
  // };
  // this.appService.gebruikerAanmaken(this.gebruiker).subscribe((gebruiker: Gebruiker) => {
  //   this.gebruiker = gebruiker;
  //   this.inlognaam = gebruiker.naam;
  //   this.appService.getGerechten(this.gebruiker).subscribe((gerechten: Array<Gerecht>) => {
  //     this.gerechten = gerechten;
  //   });
  // });
// }

// ngOnInit() {

// }
// }
