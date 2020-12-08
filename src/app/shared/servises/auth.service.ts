import {User} from "../model/user.model";

export class AuthService{


  login(user: User){
    window.localStorage.setItem('user', JSON.stringify(user));
    console.log("login: " + JSON.stringify(user));
  }

  getCurrentUser(): User {
    const userStr = window.localStorage.getItem('user');
    const u: User = JSON.parse(userStr);
    return u;
  }

  logout(){
    window.localStorage.clear();
  }

  isLoggedIn(): boolean{
    const userStr = window.localStorage.getItem('user');
    console.log("isLogged: " + userStr);
    return userStr !== null && userStr.length > 0;
  }
}
