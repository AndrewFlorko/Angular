import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {StartModule} from './start/start.module';
import {HomeModule} from './home/home.module';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './shared/servises/user.service';
import {AuthService} from './shared/servises/auth.service';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
