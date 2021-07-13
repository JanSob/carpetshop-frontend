import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CarpetsService} from '../../../services/carpetservice/carpets.service';
import {Carpet} from '../../../models/carpet/carpet';
import {ProductCardComponent} from '../product-card/product-card.component';
import {isBooleanLiteralLike} from 'codelyzer/util/utils';
import {FavoritesService} from '../../../services/favoriteservice/favorites.service';
import {CarpetsPage} from '../../../models/CarpetsPage';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allCarpets: Carpet[] = [];
  totalNumberCarpets!: number;
  private favoriteCarpets: Carpet[] = [];

  lengthMmMin!: number;
  lengthMmMax!: number;
  widthMmMin!: number;
  widthMmMax!: number;

  onclick(){
    const request = {};
    // @ts-ignore
    request['lengthMmMin'] = this.lengthMmMin;
    // @ts-ignore
    request['lengthMmMax'] = this.lengthMmMax;
    // @ts-ignore
    request['widthMmMin'] = this.widthMmMin;
    // @ts-ignore
    request['widthMmMax'] = this.lengthMmMin;
    this.carpetService.query(request)
      .subscribe(
        (allCarpets: CarpetsPage)=>{
          this.allCarpets = allCarpets.content;
          this.totalNumberCarpets = allCarpets.totalElements;
          let item = localStorage.getItem("favoriteCarpets");
          if(item){
            this.favoriteCarpets = JSON.parse(item)
          }
        },
        error=>{return;}
      );
  }

  constructor(private carpetService: CarpetsService,
              private favoriteService: FavoritesService) { }

  ngOnInit(): void {
    this.carpetService.getCarpetsList().subscribe(
      (allCarpets: CarpetsPage)=>{
        this.allCarpets = allCarpets.content;
        this.totalNumberCarpets = allCarpets.totalElements;
        let item = localStorage.getItem("favoriteCarpets");
        if(item){
          this.favoriteCarpets = JSON.parse(item)
        }
      },
      error=>{return;}
    );
  }

  carpetIsFavorite(carpet: Carpet): boolean{
    let resultFoundFavorite = this.favoriteCarpets.find(favCarpet => favCarpet.id === carpet.id);
    let isFavorite = (resultFoundFavorite !== undefined);
    //console.log("Productlist.carpetisfavorite: " + isFavorite + " of carpetid: " + carpet.id)
    return isFavorite;
  }
  nextPage(event: PageEvent) {
    const request = {};
    // @ts-ignore
    request['page'] = event.pageIndex.toString();
    // @ts-ignore
    request['size'] = event.pageSize.toString();
    this.carpetService.getCarpetsList(request).subscribe(
      (allCarpets: CarpetsPage)=>{
        this.allCarpets = allCarpets.content;
        this.totalNumberCarpets = allCarpets.totalElements;
        let item = localStorage.getItem("favoriteCarpets");
        if(item){
          this.favoriteCarpets = JSON.parse(item)
        }
      },
      error=>{return;}
    );;
  }

}
