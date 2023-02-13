import { Component,OnInit,NgModule} from '@angular/core';
import { DSSActors } from '../DSSActors';
import { products } from '../products';
import { APi_Service } from '../Services';
import { Router } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


export interface Actor {
  actorId: number;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
  actorData:any;
  p: number = 1; // setting the initial page number to 1
  constructor(private _apiservice:APi_Service,private router: Router){}
  ngOnInit(){
    this._apiservice.getdata().subscribe(res=>{
      this.actorData=res;
    })
  }


  share() {
    window.alert('The product has been shared!');
  }

  
  goToHome() {
    this.router.navigate(['/home']);
  }
  onEdit(item:any){
    item.isEdit=true;
  }

  updateActor(actorId: number){
    this.router.navigate(['update-actor', actorId]);
  }

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
