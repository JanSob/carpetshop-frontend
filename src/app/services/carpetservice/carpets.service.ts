import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
}
