import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {RegistrationsComponent} from './start/registrations/registrations.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'registration', component: RegistrationsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
