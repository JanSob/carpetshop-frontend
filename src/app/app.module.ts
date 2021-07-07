import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarpetDetailsComponent } from './components/carpet-details/carpet-details.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CarpetsService} from './services/carpetservice/carpets.service';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductCategoriesComponent } from './components/shopping-cart/product-categories/product-categories.component';
import { ProductCardComponent } from './components/shopping-cart/product-card/product-card.component';
import { ProductDetailsComponent } from './components/shopping-cart/product-details/product-details.component';
import  '@google/model-viewer';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminInventoryComponent } from './components/admin/admin-inventory/admin-inventory.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthInterceptor} from './services/authservice/AuthInterceptor';
import { EditDetailsComponent } from './components/admin/admin-edit-details/edit-details/edit-details.component';
import { AddCarpetComponent } from './components/admin/add-carpet/add-carpet/add-carpet.component';


@NgModule({
  declarations: [
    AppComponent,
    CarpetDetailsComponent,
    AllProductsComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    ProductCategoriesComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    AdminLoginComponent,
    AdminComponent,
    AdminInventoryComponent,
    LoginComponent,
    ProfileComponent,
    EditDetailsComponent,
    AddCarpetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, CarpetsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
