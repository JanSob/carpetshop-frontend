import { Component, OnInit, Input } from '@angular/core';
import {CarpetsService} from '../../../services/carpetservice/carpets.service';
import {Carpet} from '../../../models/carpet/carpet';
import {ProductCardComponent} from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allCarpets: Carpet[] = [];

  constructor(private carpetService: CarpetsService ) { }

  ngOnInit(): void {
    this.carpetService.getCarpetsList().subscribe(
      (allCarpets: Carpet[])=>{
        this.allCarpets = allCarpets;
      },
      error=>{return;}
    );
  }

}
