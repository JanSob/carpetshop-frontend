import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {ProductDetailsComponent} from './components/shopping-cart/product-details/product-details.component';
import {AllProductsComponent} from './components/all-products/all-products.component';
import {AdminLoginComponent} from './components/admin/admin-login/admin-login.component';
import {AdminComponent} from './components/admin/admin.component';
import {AdminInventoryComponent} from './components/admin/admin-inventory/admin-inventory.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {AddCarpetComponent} from './components/admin/add-carpet/add-carpet/add-carpet.component';
import {FavoriteProductsComponent} from './components/shopping-cart/favorite-products/favorite-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'products' , pathMatch: 'full'},
  //{ path: '/', redirectTo: 'products' , pathMatch: 'full'},
  { path: 'products/details/:id', component: ProductDetailsComponent , pathMatch: 'full'},
  { path: 'artest', component: AllProductsComponent , pathMatch: 'full'},
  { path: 'products/favorites', component: FavoriteProductsComponent ,pathMatch: 'full'},
  { path: 'products', component: ShoppingCartComponent ,pathMatch: 'full'},
  {path:'admin', component: AdminComponent, children:[
    {path:'login', component:AdminLoginComponent},
    {path:'profile', component:ProfileComponent},
    {path:'inventory', component: AdminInventoryComponent},
    {path:'inventory/add', component: AddCarpetComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
