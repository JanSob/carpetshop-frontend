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
  selectedId?: Number;
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

  editDetails(id: Number | null): void{
    if(!id){
      console.log("Id is invalid: " +id);
      return;
    }
    this.selectedId = id!;
  }

  deleteCarpet(id: Number | null) {
    if(!id){
      console.log("Id is invalid: " +id);
      return;
    }
    this.adminService.deleteCarpet(id!).subscribe(data => {

      console.log("Carpet deleted-status:" + data);
      this.ngOnInit();
    })
  }
}
