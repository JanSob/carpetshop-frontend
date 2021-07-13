import { Component, OnInit } from '@angular/core';
import {CarpetsService} from '../../services/carpetservice/carpets.service';
import {Carpet} from '../../models/carpet/carpet';
import {CarpetsPage} from '../../models/CarpetsPage';

@Component({
  selector: 'app-carpet-details',
  templateUrl: './carpet-details.component.html',
  styleUrls: ['./carpet-details.component.css']
})
export class CarpetDetailsComponent implements OnInit {
  allCarpets: Carpet[] = [];

  constructor(private carpetsService: CarpetsService) { }

  ngOnInit(): void {
    this.carpetsService.getCarpetsList().subscribe(
      (allCarpets: CarpetsPage) => {
        this.allCarpets = allCarpets.content;
      },
    error => {
        return;
      }
    );
  }

}
