import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    uname:'',
    password:''
  }

  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    // alert("login processing...")
    console.log("step1")
    this._auth.loginUser(this.user)
  }

}
