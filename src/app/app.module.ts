import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistreerComponent } from './registreer/registreer.component';
import { OverzichtComponent } from './overzicht/overzicht.component';
import { Service } from './shared/service';
import { ActiveGebruiker } from './shared/active-gebruiker';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreerComponent,
    OverzichtComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ActiveGebruiker,
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
