import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start.component';
import {LoginComponent} from './login/login.component';
import {RegistrationsComponent} from './registrations/registrations.component';



const routes: Routes = [
      {path: '', component: StartComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class StartRoutingModule {}
