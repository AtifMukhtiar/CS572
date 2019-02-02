import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {DataService} from "./services/data.service";

@Injectable({
  providedIn: 'root'
})
export class UseridGuard implements CanActivate {
  constructor(private route: Router, private service: DataService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.service.getDataById(next.params['id'])) {
      return true;
    } else {
      this.route.navigate(['error']);
    }
  }
}
