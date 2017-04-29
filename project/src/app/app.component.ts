import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() loadedPane = "";
  title = 'app works!';
  loadThis(string){
    // Function responds to data emitted from the header component.
    this.loadedPane = string;
  }
}
