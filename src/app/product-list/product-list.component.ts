import { Component,OnInit } from '@angular/core';
import { DSSActors } from '../DSSActors';
import { products } from '../products';
import { APi_Service } from '../Services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
  actorData:any;
  
  constructor(private _apiservice:APi_Service,private router: Router){}
  ngOnInit(){
    this._apiservice.getdata().subscribe(res=>{
      this.actorData=res;
    })
  }


  products = products;
  DSSActors = DSSActors;

  share() {
    window.alert('The product has been shared!');
  }

  
  goToHome() {
    this.router.navigate(['/home']);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
