// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userDate = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('accessToken') != null) {
      this.saveUser();
    }
    else {
      // this._Router.navigate(['login'])
    }

  }

  saveUser() {
    let decodeduser = JSON.stringify(localStorage.getItem('accessToken'));
    // this.userDate=jwtDecode(decodeduser);
    this.userDate.next(jwtDecode(decodeduser));
    // console.log(this.userDate.getValue());


  }
  
  
  

  register(formDate: any): Observable<any> {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signup`, formDate)
  }


  login(formDate: any): Observable<any> {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signin`, formDate)
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.userDate.next(null);
    this._Router.navigate(['login'])

  }

}




