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
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdateActorComponent } from './update-actor/update-actor.component';
import { APi_Service } from './Services';

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
  { path: 'update-actor/:actorId', component: UpdateActorComponent },
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
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
     
  declarations: [
    AppComponent,
    TopBarComponent,
    offercomponent,
    HomeComponent,
    ProductListComponent,
    UpdateActorComponent
  ],
  providers:[APi_Service],
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