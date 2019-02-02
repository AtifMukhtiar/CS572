import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-user-detail',
  template: `
    <p>First Name: {{user.name.first}}</p>
    <p>LAst Name: {{user.name.last}}</p>
    <p>Gender: {{user.gender}}</p>
    <p>Email: {{user.email}}</p>
  `,
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private user: object;

  constructor(public route: ActivatedRoute, public service: DataService) {
    this.getDataById();
  }

  getDataById() {
    this.route.params.subscribe(value => {
      console.log(value.id);
      this.user = this.service.getDataById(value.id);
    })
  }

  ngOnInit() {
  }

}
