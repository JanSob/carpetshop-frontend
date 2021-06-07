import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/adminservice/admin.service';
import {AuthService} from '../../../services/authservice/auth.service';
import {AuthInterceptor} from '../../../services/authservice/AuthInterceptor';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  isLoggedIn!: boolean;
  username!: string;
  password!: string;

  constructor(private adminService: AdminService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  public submit(): void{
    console.log("Submit()")
    this.authService.login2(this.username, this.password).subscribe(res=>{
      this.authService.setSession(res);
      this.ngOnInit()
    });
  }


  infos() {
      console.log(localStorage.getItem("id_token"));
  }
}
