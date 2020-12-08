import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/servises/user.service';
import {User} from '../../shared/model/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent implements OnInit {

  form: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'name': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'agree': new FormControl(null, [Validators.requiredTrue]),
    });
  }

  onSubmit(){
    const {email, password, name} = this.form.value;
    const user = new User(email, password, name);

    this.userService.createUser(user)
      .subscribe(() => {
          this.router.navigate(['/login'],{
            queryParams: {
              canLogin: true
            }
          });
      });
  }
  // Асинхронный валидатор.
  forbiddenEmails(control: FormControl): Promise<any>{
    return new Promise((resolve, reject) => {
      this.userService.getUsers(control.value)
        .subscribe((user: User) => {
          if (user) { // Если пользователь уже существует.
            resolve({forbiddenEmail: true});
          }else{      // Иначе передаем null
            resolve(null);
          }
          });
      });
  }
}
