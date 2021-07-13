import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Carpet} from '../../models/carpet/carpet';
import {environment} from '../../../environments/environment';
import {CarpetsPage} from '../../models/CarpetsPage';

const baseUri = environment.backendUrl + '/carpets/';


@Injectable({
  providedIn: 'root'
})
export class CarpetsService {

  constructor(private httpClient: HttpClient) { }

/*  getCarpetsList(): Observable<Carpet[]>{
    return this.httpClient.get<Carpet[]>(baseUri);
  }  */

  getCarpetsList(request?: any): Observable<CarpetsPage>{
    const params = request;
    return this.httpClient.get<CarpetsPage>(baseUri, {params});
  }

  query(request: any): Observable<CarpetsPage>{
    const params = request;
    return this.httpClient
      .get<CarpetsPage>(baseUri+"query",{params});
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
