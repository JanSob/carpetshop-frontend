import { Component, OnInit } from '@angular/core';
import {Carpet} from '../../models/carpet/carpet';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  favoriteCarpets: Carpet[] = [];


  constructor() { }

  ngOnInit(): void {
  }



}
