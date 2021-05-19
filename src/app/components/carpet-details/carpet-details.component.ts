import { Component, OnInit } from '@angular/core';
import {CarpetsService} from '../../services/carpetservice/carpets.service';
import {Carpet} from '../../models/carpet/carpet';

@Component({
  selector: 'app-carpet-details',
  templateUrl: './carpet-details-bootstrap.component.html',
  styleUrls: ['./carpet-details.component.css']
})
export class CarpetDetailsComponent implements OnInit {
  allCarpets: Carpet[] = [];

  constructor(private carpetsService: CarpetsService) { }

  ngOnInit(): void {
    this.carpetsService.getCarpetsList().subscribe(
      (allCarpets: Carpet[]) => {
        this.allCarpets = allCarpets;
      },
    error => {
        return;
      }
    );
  }

}
