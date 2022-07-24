import { Component } from '@angular/core';

import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app3';
  opened=false;
  isLogin: boolean = false;
 


  constructor(public _AuthService: AuthService) { }

  ngOnInit(): void {
    // console.log(this._AuthService.userDate.getValue());


    this._AuthService.userDate.subscribe(() => {
      if (this._AuthService.userDate.getValue() != null) {
        this.isLogin = true;
      }
      else {
        this.isLogin = false;

      }
    });


  }
}
