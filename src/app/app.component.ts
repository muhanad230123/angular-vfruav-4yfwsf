import { Component } from '@angular/core';
import { APi_Service } from './Services';
import { Router } from '@angular/router';
import {AppRoutingModule} from './app-routing.module'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//   template: `
//   <app-top-bar></app-top-bar>
//   <ul>
//     <li><a routerLink="/home">home</a></li>
//     <li><a (click)="showContainer()">product-list</a></li>
//   </ul>
//   <div class="container" *ngIf="displayContainer">
//     <router-outlet></router-outlet>
//   </div>
// `
})
export class AppComponent {
  title='apidata'
  actorData:any;
  constructor(private _apiservice:APi_Service,private router: Router){}
 displayContainer = false;

  showContainer() {
    this.displayContainer = true;
  }
  ngOnInit(){
    this._apiservice.getdata().subscribe(res=>{
      this.actorData=res;
    })
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/