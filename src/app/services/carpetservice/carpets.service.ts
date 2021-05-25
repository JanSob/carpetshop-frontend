import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Carpet} from '../../models/carpet/carpet';
import {environment} from '../../../environments/environment';

const baseUri = environment.backendUrl + '/carpets/';


@Injectable({
  providedIn: 'root'
})
export class CarpetsService {

  constructor(private httpClient: HttpClient) { }

  getCarpetsList(): Observable<Carpet[]>{
    return this.httpClient.get<Carpet[]>(baseUri);
  }
/*  getCarpetById(id:number): Observable<Carpet>{
    const params = new HttpParams()
      .set('id', id.toString());
    return this.httpClient.get<Carpet>(baseUri, {params});
  }*/
  getCarpetById(id:number): Observable<Carpet>{
    return this.httpClient.get<Carpet>(baseUri + id);
  }
}
