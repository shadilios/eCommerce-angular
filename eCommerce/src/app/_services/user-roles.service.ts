import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject } from 'rxjs';
import { LoginResponse } from '../_models/auth/loginResponse.model.ts';

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  private loggedRoles = new BehaviorSubject<string[]>([""]);
  public loggedRoles$ = this.loggedRoles.asObservable();

  constructor(private storage: LocalStorageService) {
    const user = this.storage.getData("user") as LoginResponse;
    if (user) {
      this.loggedRoles.next(user.roles);

    } else {
      this.loggedRoles.next([""]);
    }
  }

  loggedIn(user: LoginResponse) {
    this.loggedRoles.next(user.roles);
  }

  loggedOut() {
    this.storage.removeData("user");
    this.loggedRoles.next([""]);
  }

}
