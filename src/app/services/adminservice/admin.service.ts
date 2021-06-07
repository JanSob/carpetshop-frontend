import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, Subscription} from 'rxjs';
import {User} from '../../models/user';
import {Carpet} from '../../models/carpet/carpet';

const baseUri = environment.backendUrl + '/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  authenticated = false;

  constructor(private httpClient: HttpClient) { }

  getCarpetsList(): Observable<Carpet[]>{
    return this.httpClient.get<Carpet[]>(baseUri+"/carpets");
  }

  // adminEndpoint.getAllCarpets

  // adminEndpoint.getCarpetByID

  // adminEndpoint.saveCarpet

  // Some kind of interceptor that send the JWT token with every request

}
