import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../_models/auth/loginDto.model';
import { API_URL } from '../_files/constant';
import { LocalStorageService } from './local-storage.service';
import { LoginResponse } from '../_models/auth/loginResponse.model.ts';
import { BehaviorSubject, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRolesService } from './user-roles.service';
import { SignUpDto } from '../_models/auth/signupDto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInSubject = new BehaviorSubject<boolean>(false);
  public loggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient, private storage: LocalStorageService, private router: Router, private route: ActivatedRoute, private rolesService: UserRolesService) {
    const token = this.storage.getData("token");
    if (token && this.validateToken(token)) {
      this.loggedInSubject.next(true);
    }
    else {
      this.loggedInSubject.next(false);
    }
  }



  login(loginDto: LoginDto) {
    return this.http.post(API_URL + "/auth/signin", loginDto);
  }

  loggedInStatus(condition : boolean){
    this.loggedInSubject.next(condition);
  }


  logout() {
    this.storage.removeData("token");
    this.loggedInSubject.next(false);
    this.rolesService.loggedOut();
  }

  registerAdmin(signupDto: SignUpDto) {
    return this.http.post(API_URL + "/auth/registerAdmin", signupDto);
  }

  registerEditor(signupDto: SignUpDto) {
    return this.http.post(API_URL + "/auth/registerEditor", signupDto);
  }

  validateToken(token: string) {
    //check if token is valid or not

    var valid = true;

    //if token isn't valid, delete it from local storage!
    if (!valid) {
      this.storage.removeData("token");
      this.storage.removeData("user");
    }
    return valid;
  }


}
