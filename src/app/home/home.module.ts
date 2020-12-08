import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeRotingModule} from './home-routing.module';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HomeRotingModule,
    SharedModule
  ],
  providers: [],
})
export class HomeModule { }
