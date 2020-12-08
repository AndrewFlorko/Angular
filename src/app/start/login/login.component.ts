import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Massage} from '../../shared/model/massage.model';
import {UserService} from '../../shared/servises/user.service';
import {AuthService} from '../../shared/servises/auth.service';
import {User} from '../../shared/model/user.model';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  massage: Massage;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.massage = new Massage('danger', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['canLogin']){
          this.showMassage({
            text: 'Регистрация успешно завершена',
            type: 'success'
          });
        }
        });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMassage(massage: Massage){
    this.massage = massage;

    window.setTimeout(() => {
      this.massage.text = '';
    }, 5000);
  }

  onSubmit() {
    const formData = this.form.value;

    this.userService.getUsers(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            this.authService.login(user);
            this.router.navigate(["home"]);

            console.log('Вы успешно авторизованы');
          } else {
            this.showMassage({
              text: 'Пароль введён неверно',
              type: 'danger'
            });
          }
        }else {
          this.showMassage({
            text: 'Такого пользователя не существует',
            type: 'danger'
          });
        }
      });
    error => {alert("Ошибка при обращении к серверу: " + error.message);}
  }
}
