import { Component, OnInit } from '@angular/core';
import {Carpet} from '../../../models/carpet/carpet';
import {FavoritesService} from '../../../services/favoriteservice/favorites.service';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.css']
})
export class FavoriteProductsComponent implements OnInit {

  favoriteCarpets: Carpet[] = [];

  constructor(private favoriteService: FavoritesService) { }

  ngOnInit(): void {
    //this.favoriteCarpets = this.favoriteService.getFavoriteCarpets();
    let item = localStorage.getItem("favoriteCarpets");
    if(item){
      this.favoriteCarpets = JSON.parse(item)
    }
    //console.log("Favorite-List got this from service: " + this.favoriteCarpets.toString());
  }

  ngOnChanges(): void{
    this.favoriteCarpets = this.favoriteService.getFavoriteCarpets();
  }



}
