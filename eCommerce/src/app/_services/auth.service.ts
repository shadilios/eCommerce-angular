import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../_models/loginDto.model';
import { API_URL } from '../_files/constant';
import { LocalStorageService } from './local-storage.service';
import { LoginResponse } from '../_models/loginResponse.model.ts';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInSubject = new BehaviorSubject<boolean>(false);
  public loggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  login(loginDto: LoginDto) {
    return this.http.post(API_URL + "/auth/signin", loginDto).subscribe({
      next: (value) => {
        //console.log(value as LoginResponse);
        if ((value as LoginResponse).token != null) {
          this.loggedInSubject.next(true);
        }
      },
      complete: () => {
        console.log("COMPLETE");
      },
      error: (error) => {
        console.log(error);
        this.loggedInSubject.next(false);
      }
    });

  }

  logout() {
    this.loggedInSubject.next(false);
  }


}
