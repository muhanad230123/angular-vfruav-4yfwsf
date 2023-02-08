import { Component } from '@angular/core';
import { DSSActors } from '../DSSActors';
import { products } from '../products';
import { ApiServiceService } from '../Services';
import { offercomponent } from '../offercomponent';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
  actorData:any;
  constructor(private _apiservice:ApiServiceService){}
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
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
