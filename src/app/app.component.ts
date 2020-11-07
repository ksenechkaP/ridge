import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ridge';
  public jsonURL: any;

  constructor() {}

  modelChangeFn(e) {
   this.jsonURL = e;
 }
}
