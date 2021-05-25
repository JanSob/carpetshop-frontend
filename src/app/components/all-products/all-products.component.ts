import { Component, OnInit } from '@angular/core';
import {CarpetsService} from '../../services/carpetservice/carpets.service';
import {Carpet} from '../../models/carpet/carpet';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
