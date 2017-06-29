import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authThis: AuthServiceService,
              private router: Router ) { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authThis.loginInUser(email,password);
    this.router.navigate(['/']);
  }

}
