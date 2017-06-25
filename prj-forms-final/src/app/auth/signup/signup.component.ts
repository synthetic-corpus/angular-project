import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
// import everythin from firebase and call it firebaseio


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  onSignUp(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
  }

}
