// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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

  logOut(){
    this._AuthService.logout();
  }

}
