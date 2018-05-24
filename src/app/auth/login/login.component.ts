import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuth$ = this._auth.isAuth;
  constructor(
    private _route: Router,
    private _auth: AuthService) { }

  ngOnInit() { }

  login(from) {
    console.log('after form', from);
    this._route.navigate(['home']);
  }

}
