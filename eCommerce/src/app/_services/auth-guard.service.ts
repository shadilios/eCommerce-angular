import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    var isLoggedIn = false;
    this.auth.loggedIn$.subscribe((loggedIn) => {
      isLoggedIn = loggedIn;
    })
    if (isLoggedIn)
      return true;

      this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
    alert("SIGN IN TO ACCESS THIS PAGE");

    return false;
  }
}
