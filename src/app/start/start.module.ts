import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StartComponent} from './start.component';
import {StartRoutingModule} from './start-routing.module';
import {SharedModule} from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegistrationsComponent } from './registrations/registrations.component';



@NgModule({
  declarations: [
    StartComponent,
    LoginComponent,
    RegistrationsComponent
  ],
  imports: [
    BrowserModule,
    StartRoutingModule,
    SharedModule
  ],
  providers: [],
})
export class StartModule { }
