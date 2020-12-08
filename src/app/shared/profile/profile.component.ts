import { Component, OnInit } from '@angular/core';
import {AuthService} from "../servises/auth.service";
import {User} from "../model/user.model";
import {Router} from "@angular/router";


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User = null;
  public isLoggedIn: Boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = this.authService.getCurrentUser();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
