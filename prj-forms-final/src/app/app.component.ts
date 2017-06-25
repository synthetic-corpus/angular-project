import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  /* After installing the Firebase package.
    The package must be configured here.
    NgOnit, so it occurse right as component is load. */
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDWZXjCap_ClYI_u8VeAclr5sMwrBQxKcw",
      authDomain: "udemy-project-49359.firebaseapp.com"
    })
  }
}
