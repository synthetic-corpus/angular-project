import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthServiceService {

  constructor() { }

  signUpUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(
        error => console.log(error)
      );
  }

  loginInUser(email: string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.log(error)
      )
  }
}
