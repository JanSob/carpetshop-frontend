import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {AdminService} from '../../../../services/adminservice/admin.service';
import {Carpet} from '../../../../models/carpet/carpet';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  @Input() carpetId?: Number | null;
  carpet?: Carpet | null;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getCarpetById(this.carpetId!).subscribe(
      (carpet: Carpet) => {
        this.carpet = carpet;
      },
      error => {
        console.log("Error while fetching carpet")
      }
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  close(){
    this.carpet = null;
    this.carpetId = null;
  }

}
