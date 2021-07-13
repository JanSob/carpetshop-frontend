import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/adminservice/admin.service';
import {Carpet} from '../../../models/carpet/carpet';
import {CarpetsPage} from '../../../models/CarpetsPage';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-admin-inventory',
  templateUrl: './admin-inventory.component.html',
  styleUrls: ['./admin-inventory.component.css']
})
export class AdminInventoryComponent implements OnInit {

  allCarpets: Carpet[] = [];
  selectedId?: Number;
  totalNumberCarpets!: number;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getCarpetsList().subscribe(
      (allCarpets: CarpetsPage) =>{
        this.allCarpets = allCarpets.content;
        this.totalNumberCarpets = allCarpets.totalElements;
      }, error=>{
        console.log("Couldn't load carpets")
      }
    )
  }

  nextPage(event: PageEvent) {
    const request = {};
    // @ts-ignore
    request['page'] = event.pageIndex.toString();
    // @ts-ignore
    request['size'] = event.pageSize.toString();
    this.adminService.getCarpetsList(request).subscribe(
      (allCarpets: CarpetsPage) =>{
        this.allCarpets = allCarpets.content;
        this.totalNumberCarpets = allCarpets.totalElements;
      }, error=>{
        console.log("Couldn't load carpets")
      }
    );
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
