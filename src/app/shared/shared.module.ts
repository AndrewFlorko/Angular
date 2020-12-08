import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from "./profile/profile.component";
import { RouterModule } from '@angular/router';
import {StartComponent} from "../start/start.component";
import {LoginComponent} from "../start/login/login.component";
import {RegistrationsComponent} from "../start/registrations/registrations.component";

@NgModule ({
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  exports: [ReactiveFormsModule, FormsModule, ProfileComponent],
  declarations: [
    ProfileComponent
  ],
})

export class SharedModule {


}
