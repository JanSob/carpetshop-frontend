import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  lengthMmMin!: number;
  lengthMmMax!: number;
  widthMmMin!: number;
  widthMmMax!: number;

  onclick(event: Event){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
