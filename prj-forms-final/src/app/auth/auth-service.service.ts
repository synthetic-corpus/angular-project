import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthServiceService {

  constructor() { }
  token: string;

  signUpUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(
        error => console.log(error)
      );
  }

  loginInUser(email: string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(
        response => {
          firebase.auth().currentUser.getToken()
            .then(
              (token:string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      )
  }

  getToken(){
    /* Uses Firebase SDK... Returns a promise. This is an async request.
      Can be a problem, I'm sure. */
      firebase.auth().currentUser.getToken()
        .then(
          (token:string) => this.token = token
        );
    return this.token;
  }

  isAuthenticated() {
    if (this.token != null){
      return true;
    }else
    {
      return false;
    }
  }

  onLogOut () {
    this.token = null;
  }
}
