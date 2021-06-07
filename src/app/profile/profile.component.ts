import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../token-storage.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  tokenString: string | null;

  constructor(public token: TokenStorageService) {
    this.tokenString = this.token.getToken();
  }

  ngOnInit(): void {
    this.tokenString = this.token.getToken();
  }
}
