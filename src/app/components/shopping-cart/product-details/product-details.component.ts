import {Component, Input, OnInit} from '@angular/core';
import {Carpet} from '../../../models/carpet/carpet';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {CarpetsService} from '../../../services/carpetservice/carpets.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  carpet!:Carpet;

  constructor(private activatedRoute: ActivatedRoute,
              private carpetService: CarpetsService,
              private location : Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
       let id:number = params['id'];
       this.carpetService.getCarpetById(id).subscribe(
         (carpet: Carpet) => {
           this.carpet = carpet
         },
         error => {
           return;
        }
       )
      }
    )
  }
  back(){
    this.location.back();
  }

}
