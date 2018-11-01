import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.css']
})
export class OverzichtComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { Form } from '../app/form/form';
// import { Gebruiker } from './gebruiker.model';
// import { Gerecht } from './gerecht.model';
// import { Ingredient } from './ingredient.model';
// import { Service } from './shared/service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent extends Form {
//   gebruiker: Gebruiker;
//   inlognaam: string;
//   aanmakenFormulierZichtbaar: boolean;
//   gerechten: Array<Gerecht>;
//   randomGerecht: Gerecht;
//   gerechtAanmakenZichtbaar: boolean;
//   gerecht: Gerecht;
//   ingredienten: Array<Ingredient> = [];

//   constructor(
//     private fb: FormBuilder,
//     private appService: Service
//   ) {
//     super();
//     this.createForm();
//   }

//   form: FormGroup;
//   formErrors = {
//   };
//   validationMessages = {
//   };

//   protected createForm() {
//     this.form = this.fb.group({
//       Gebruikersnaam: [''],
//       Wachtwoord: [''],
//       GerechtNaam: [''],
//       Vlees: [''],
//       Vis: [''],
//       AantalPersonen: [''],
//       IngredientNaam: [''],
//       Hoeveelheid: [''],
//       Eenheid: ['']
//     });
//     super.createForm();
//   }

//   submitForm() {
//     this.gebruiker = {
//       naam: this.form.get('Gebruikersnaam').value,
//       wachtwoord: this.form.get('Wachtwoord').value,
//     };
//     this.appService.checkLogin(this.gebruiker).subscribe((gebruiker: Gebruiker) => {
//       this.gebruiker = gebruiker;
//       this.inlognaam = gebruiker.naam;
//       this.appService.getGerechten(this.gebruiker).subscribe((gerechten: Array<Gerecht>) => {
//         this.gerechten = gerechten;
//       });
//     });
//   }

//   gebruikerAanmaken() {
//     this.gebruiker = {
//       naam: this.form.get('Gebruikersnaam').value,
//       wachtwoord: this.form.get('Wachtwoord').value
//     };
//     this.appService.gebruikerAanmaken(this.gebruiker).subscribe((gebruiker: Gebruiker) => {
//       this.gebruiker = gebruiker;
//       this.inlognaam = gebruiker.naam;
//       this.appService.getGerechten(this.gebruiker).subscribe((gerechten: Array<Gerecht>) => {
//         this.gerechten = gerechten;
//       });
//     });
//   }

//   getRandomGerecht() {
//     this.appService.getRandomGerecht(this.gebruiker).subscribe((gerecht: Gerecht) => {
//       this.randomGerecht = gerecht;
//     });
//   }

//   ingredientToevoegen() {
//     const ingredient: Ingredient = {
//       naam: this.form.get('IngredientNaam').value,
//       hoeveelheid: this.form.get('Hoeveelheid').value,
//       eenheid: this.form.get('Eenheid').value
//     }
//     this.ingredienten.push(
//       ingredient
//     );
//   }

//   gerechtAanmaken() {
//     this.gerecht = {
//       naam: this.form.get('GerechtNaam').value,
//       vis: this.form.get('Vis').value || false,
//       vlees: this.form.get('Vlees').value || false,
//       aantalPersonen: Number(this.form.get('AantalPersonen').value) || 1,
//       gebruikerId: this.gebruiker.id,
//       vegetarisch: undefined,
//       ingredienten: this.ingredienten,
//       id: undefined
//     };
//     this.appService.postNieuwGerecht(this.gerecht).subscribe((gerecht: Gerecht) => {
//       this.appService.getGerechten(this.gebruiker).subscribe((gerechten: Array<Gerecht>) => {
//         this.gerechten = gerechten;
//       });
//     });
//     this.ingredienten = [];
//   }

//   verwijderGerecht(gerecht: Gerecht) {
//     this.appService.verwijderGerecht(gerecht);
//   }
