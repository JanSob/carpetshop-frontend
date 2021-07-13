import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, Subscription} from 'rxjs';
import {User} from '../../models/user';
import {Carpet} from '../../models/carpet/carpet';
import {CarpetWrapperDTO} from '../../models/carpetWrapperDTO';
import {FormBuilder} from '@angular/forms';
import {CarpetsPage} from '../../models/CarpetsPage';

const baseUri = environment.backendUrl + '/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  authenticated = false;

  constructor(private httpClient: HttpClient) { }

  // adminEndpoint.getAllCarpets
/*  getCarpetsList(): Observable<Carpet[]>{
    return this.httpClient.get<Carpet[]>(baseUri+"/carpets");
  }  */


  getCarpetsList(request?: any): Observable<CarpetsPage>{
    const params = request;
    return this.httpClient.get<CarpetsPage>(baseUri+"/carpets", {params});
  }




  // adminEndpoint.addCarpet
  addCarpet(carpet: Carpet): Observable<Carpet>{
    return this.httpClient.post<Carpet>(baseUri+"/carpets/", carpet);
  }




/*  addCarpetWithMedia(carpetWrapperDTO: CarpetWrapperDTO): Observable<Carpet>{
    //Cooler trick
    // stringify für POJOS und DTOS, und BLOB (standard) für die files

    let files: File[]=[carpetWrapperDTO.thumbnailImage, carpetWrapperDTO.fullsizeImage,
      carpetWrapperDTO.threeDAndroid, carpetWrapperDTO.threeDIOS];

    let formData: FormData = new FormData();

    formData.append("carpetDTO", JSON.stringify(carpetWrapperDTO.carpet));
    formData.append("thumbnailImage", carpetWrapperDTO.thumbnailImage);
    formData.append("fullsizeImage", carpetWrapperDTO.fullsizeImage);
    formData.append("threeDAndroid", carpetWrapperDTO.threeDAndroid);
    formData.append("threeDIOS", carpetWrapperDTO.threeDIOS);

    //formData.append("files", JSON.stringify(files));
    //console.log(formData.get("files"))
    return this.httpClient.post<Carpet>(baseUri+"/upload", formData);
  } */

  addCarpetWithMedia(carpetWrapperDTO: CarpetWrapperDTO): Observable<Carpet>{
    //Cooler trick
    // stringify für POJOS und DTOS, und BLOB (standard) für die files

    let formData: FormData = new FormData();

    formData.append("carpetDTO", JSON.stringify(carpetWrapperDTO.carpet));

    for (let key in carpetWrapperDTO.filesDict){
      let value = carpetWrapperDTO.filesDict[key];
      formData.append(key, value);
      console.log(key + " : " + value);
    }
    return this.httpClient.post<Carpet>(baseUri+"/upload", formData);
  }

  deleteCarpet(id: Number): Observable<any>{
    return this.httpClient.delete(baseUri+"/carpets/" + id);
  }


  // adminEndpoint.getCarpetByID
  getCarpetById(id: Number | null): Observable<Carpet>{
    if(!id){
      console.log("getCarpetById: id is null!")
    }
    return this.httpClient.get<Carpet>(baseUri + "/carpets/" + id);
  }



  // Some kind of interceptor that send the JWT token with every request

}
