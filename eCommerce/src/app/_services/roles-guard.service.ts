import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserRolesService } from './user-roles.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuardService implements CanActivate {

  constructor(private rolesService: UserRolesService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    /**
     * This value comes from the routing module
     */
    const expectedRoles = route.data['roles'];
    let condition = false;
    this.rolesService.loggedRoles$.subscribe((roles) => {
      //if every role in my local storage, contains every role from guard : TRUE
      condition = roles.some(element => expectedRoles.includes(element));
    });
    if (condition) {
      return true;
    } else {
      this.router.navigateByUrl("/unauthorized")
      alert("unauthorized!!!!");
      return false;
    }
  }
}
