import {Component, Input, OnInit} from '@angular/core';
import {Carpet} from '../../../models/carpet/carpet';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {CarpetsService} from '../../../services/carpetservice/carpets.service';
import { Location } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  carpet!:Carpet;
  modelAndroidUrlHttp!: String;
  modelAndroidLocalURL!: String;
  sceneViewerUrlConstruct!:String;
  saveUrl!: SafeUrl;

  constructor(private activatedRoute: ActivatedRoute,
              private carpetService: CarpetsService,
              private location : Location,
              private http: HttpClient,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
       let id:number = params['id'];
       this.carpetService.getCarpetById(id).subscribe(
         (carpet: Carpet) => {
           this.carpet = carpet;
           let dirty = "intent://arvr.google.com/scene-viewer/1.0?file=" + this.carpet.threeD_urlAndroid +
             "&mode=ar_preferred#Intent;scheme=https;package=com.google.android.googlequicksearchbox;" +
             "action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;";
           this.saveUrl = this.sanitizer.bypassSecurityTrustUrl(dirty);
         },
         error => {
           console.log(error)
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
