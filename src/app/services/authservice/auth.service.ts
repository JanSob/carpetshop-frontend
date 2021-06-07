import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {shareReplay, tap} from 'rxjs/operators';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';
import {User} from '../../models/user';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password:string) {
    console.log("Trying to log in: " + username + " " + password);
    const data = {'username': username, 'password': password};
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };



    this.http.post<HttpResponse<any>>(environment.backendUrl + '/login', data, {
      observe: 'response'
    }).pipe(tap(res => this.setSession))
      .pipe(shareReplay());
      // this is just the HTTP call,
      // we still need to handle the reception of the token

  }

  login2(username: string, password: string): Observable<any> {
    const data = {'username': username, 'password': password};
    return this.http.post<HttpResponse<any>>(environment.backendUrl + '/login', data, { observe: 'response' });
  }

  public setSession(authResult:any) {
    //const expiresAt = moment().add(authResult.expiresIn,'second');
    localStorage.setItem('id_token', authResult.headers.get("Authorization"));
    console.log(authResult.headers.get("Authorization"));
    //localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  public isLoggedIn(): boolean{
    let token = localStorage.getItem('id_token')
    if(token == null){
      return false;
    }
    return true;
  }

  logout() {
    localStorage.removeItem("id_token");
    //localStorage.removeItem("expires_at");
  }

  /*public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }*/
}
