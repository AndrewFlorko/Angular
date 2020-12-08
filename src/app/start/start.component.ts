import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../shared/servises/user.service';
import {User} from '../shared/model/user.model';
import {Massage} from '../shared/model/massage.model';
import {AuthService} from '../shared/servises/auth.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

}
