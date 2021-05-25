import { Component, OnInit, Input } from '@angular/core';
import {Carpet} from '../../../models/carpet/carpet';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() carpet!: Carpet;
  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(){

  }

}
