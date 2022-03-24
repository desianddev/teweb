import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from "@angular/common/http";
import { Observable, from } from 'rxjs';
import { SignIn } from '../signin/sign-in';
import { ServerConstant } from 'src/app/common/server-constant';


@Injectable({
    providedIn: 'root'
  })


  export class AccountService {

    constructor(private http: HttpClient) {


    }
    LoginUser(signin:SignIn): Observable<[]> {
      const signinObj = {
        "username": signin.UserName,
        "password": signin.Password
      };

      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
      return this.http.post<[]>(ServerConstant.apiUrl + '/network/login',
      signinObj, httpOptions);
    }
    LogoutUser(): Observable<[]> {

      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
      return this.http.get<[]>(ServerConstant.apiUrl + '/network/logout',httpOptions);

    }
    Signup(signupObj:any): Observable<[]> {

      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
      return this.http.post<[]>(ServerConstant.apiUrl + '/network/user/register',signupObj,httpOptions);

    }
    ForgetPassword(email:string): Observable<[]> {
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
      return this.http.get<[]>(ServerConstant.apiUrl + '/unauthenticated/user/reset/password?username='+email,httpOptions);

    }


  }
