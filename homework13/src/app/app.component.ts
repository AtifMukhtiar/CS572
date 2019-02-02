import {Component} from '@angular/core';
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['users']">Users</a>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'homework13';

  constructor(private dataService: DataService) {
  }

}
