import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { offercomponent } from './offercomponent';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'product-list', component: ProductListComponent },
//   { path: 'home', redirectTo: '/home', pathMatch: 'full' },
//   { path: '**', redirectTo: '',component: HomeComponent },
// ];

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'product-list', component: ProductListComponent },
  // { path: 'home', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '',component: HomeComponent },
  {path : '**', component:HomeComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
     
  declarations: [
    AppComponent,
    TopBarComponent,
    offercomponent,
    HomeComponent,
    ProductListComponent
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [RouterModule]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/