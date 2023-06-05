import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../_models/loginDto.model';
import { API_URL } from '../_files/constant';
import { LocalStorageService } from './local-storage.service';
import { LoginResponse } from '../_models/loginResponse.model.ts';
import { BehaviorSubject, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInSubject = new BehaviorSubject<boolean>(false);
  public loggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient, private storage: LocalStorageService, private router: Router, private route:ActivatedRoute) {
    const token = this.storage.getData("token");
    if (token && this.validateToken(token)) {
      this.loggedInSubject.next(true);
    }
    else{
      this.loggedInSubject.next(false);
    }
  }


  login(loginDto: LoginDto) {
    return this.http.post(API_URL + "/auth/signin", loginDto).subscribe({
      next: (value) => {
        //console.log(value as LoginResponse);
        var token = (value as LoginResponse).token;
        if (token != null && token.length >= 10) {
          this.storage.saveData("token", token);
          this.loggedInSubject.next(true);
        }
      },
      complete: () => {
        console.log("COMPLETE");
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigateByUrl(returnUrl || "");
      },
      error: (error) => {
        console.log(error);
        this.loggedInSubject.next(false);
      }
    });

  }



  logout() {
    this.storage.removeData("token");
    this.loggedInSubject.next(false);
  }

  validateToken(token: string) {
    //check if token is valid or not

    var valid = true;

    //if token isn't valid, delete it from local storage!
    if (!valid) {
      this.storage.removeData("token");
    }
    return valid;
  }


}
