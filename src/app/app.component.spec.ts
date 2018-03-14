import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});


// describe('Function: submitForm', () => {

//   describe('when a valid "postcode" is submitted', () => {

//     it('should assign the returned Planning object', () => {
//       component.form.get('postcode').setValue('1001AA');
//       component.submitForm();
//       expect(component.planning).toEqual({
//         aannemer: {
//           naam: 'Energiewachtgroep',
//           telefoonnummer: '038 770 01 96',
//           url: 'http://www.meterafspraak.nl',
//           bereikbaar: 'Op werkdagen tussen 8.00 uur en 21.00 uur'
//         },
//         kavelstatus: 'concept'
//       });
