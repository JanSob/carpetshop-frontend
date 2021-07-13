import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Carpet} from '../../../models/carpet/carpet';
import {FavoritesService} from '../../../services/favoriteservice/favorites.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() carpet!: Carpet;
  @Input() isCheckedFavorite!: boolean;
  //@Output() manageFavoriteList = new EventEmitter<Carpet>();



  constructor(private favoriteService: FavoritesService) {
  }

  ngOnInit(): void {
  }

  onClick(){
  }



  manageFavorite(event: Event){
    // is checked, therefore add to favorites
    //console.log("Product-Card: manageFavorite is being called: " + this.carpet.id)
    this.favoriteService.manageFavoriteCarpet(this.carpet);
  }


}
