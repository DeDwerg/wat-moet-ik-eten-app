import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistreerComponent } from './registreer/registreer.component';
import { OverzichtComponent } from './overzicht/overzicht.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registreer', component: RegistreerComponent },
  { path: 'overzicht', component: OverzichtComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
