// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  err: string = '';
  
  isLogin:boolean=false;
  
  fieldTextType: boolean=false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][0-9]{3,10}$')]),
  });

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  loginFormSubmit(formDate: FormGroup) {
    console.log(formDate.value);
    this._AuthService.login(formDate.value).subscribe((res) => {
      console.log(res);
      if (res.message == 'success') {
        this._Router.navigate(['home']);
        localStorage.setItem('accessToken',res.token);
        this._AuthService.saveUser();
      }
      else {
        this.err = res.message
      }

     

    }, (err) => {

    }, () => {

      formDate.reset();
    })
  }
}
