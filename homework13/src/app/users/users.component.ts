import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-users',
  template: `
    <div>
      <ul>
        <li *ngFor="let user of usersData">
          <a [routerLink]="['','users',user.name.first]">
            {{user.name.first}}
          </a>
        </li>

      </ul>
    </div>
  `
  ,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersData: [];

  constructor(private dataService: DataService) {
    this.usersData = dataService.getCachedData();
  }

  ngOnInit() {
  }

}
