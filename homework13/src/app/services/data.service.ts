import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    this.getOnlineData();
  }

  getOnlineData() {
    console.log("getOnlineData");
    this.httpClient.get("https://randomuser.me/api/?results=2").pipe().subscribe(data => {
      localStorage.setItem('users', JSON.stringify(data));
    });
  }

  getCachedData() {
    console.log("getCachedData");
    let usersData = localStorage.getItem('users');
    if (usersData == null) {
      this.getOnlineData();
    } else {
      return JSON.parse(usersData).results;
    }
  }

  getDataById(name) {
    let usersData = JSON.parse(localStorage.getItem('users')).results;
    for (let n = 0; n < usersData.length; n++) {
      if (name == usersData[n].name.first) {
        return usersData[n];
      }
    }
    return null;
  }

}
