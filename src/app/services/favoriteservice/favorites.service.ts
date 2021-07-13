import { Injectable } from '@angular/core';
import {Carpet} from '../../models/carpet/carpet';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoriteCarpets: Carpet[]=[];

  constructor() { }

  onInit():void{
    let localStorageFavorites = localStorage.getItem("favoriteCarpets")
    if(localStorageFavorites){
      this.favoriteCarpets = JSON.parse(localStorageFavorites);
    }
  }

  manageFavoriteCarpet(carpet: Carpet){
    this.onInit();
    if(this.carpetIsFavorite(carpet)){
      //Remove the carpet by index position
      let pos = this.favoriteCarpets.findIndex(favCarpet => favCarpet.id === carpet.id);
      if(pos != -1){
        //this.favoriteCarpets.splice(pos, 1);
        this.favoriteCarpets = this.favoriteCarpets.slice(0, pos).concat(this.favoriteCarpets.slice(pos + 1));
        console.log("Favorite-service.manageFavoriteCarpet: REMOVING carpet to favorites ID: " + carpet.id)
      }
    }
    else{
      //Add carpet to favorites-array
      console.log("Favorite-service.manageFavoriteCarpet: ADDING carpet to favorites ID: " + carpet.id)
      this.favoriteCarpets.push(carpet);
    }
    //overwrite/add the list of favorites to localstorage
    let carpetListJson = JSON.stringify(this.favoriteCarpets);
    localStorage.setItem("favoriteCarpets", carpetListJson);
  }

  carpetIsFavorite(carpet: Carpet): boolean{
    let resultFoundFavorite = this.favoriteCarpets.find(favCarpet => favCarpet.id === carpet.id);
    let isFavorite = (resultFoundFavorite !== undefined);
    return isFavorite;
  }
  getFavoriteCarpets(): Carpet[]{
    return this.favoriteCarpets;
  }

}
