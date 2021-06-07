import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/adminservice/admin.service';
import {Carpet} from '../../../models/carpet/carpet';

@Component({
  selector: 'app-admin-inventory',
  templateUrl: './admin-inventory.component.html',
  styleUrls: ['./admin-inventory.component.css']
})
export class AdminInventoryComponent implements OnInit {

  allCarpets: Carpet[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getCarpetsList().subscribe(
      (allCarpets: Carpet[]) =>{
        this.allCarpets = allCarpets;
      }, error=>{
        console.log("Couldn't load carpets")
      }
    )
  }

}
