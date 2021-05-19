import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarpetDetailsComponent } from './components/carpet-details/carpet-details.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {CarpetsService} from './services/carpetservice/carpets.service';

@NgModule({
  declarations: [
    AppComponent,
    CarpetDetailsComponent,
    AllProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [CarpetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
