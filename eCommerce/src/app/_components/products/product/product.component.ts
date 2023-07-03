import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // ** INPUT **
  @Input() product?: Product;
  @Input() isUser? : boolean;
  @Input() isEditor? : boolean;
  @Input() isAdmin? : boolean;

  // ** OUTPUT **
  //Name of events will be typed in the <app-product>
  @Output("productDeletedEvent") productDeletedEvent = new EventEmitter();

  isOnSale?: boolean;
  discountPrice?: number;



  constructor() {
    //this.product to make sure it's not null
    this.isDiscounted();
  }

  ngOnInit(): void {

  }

  isDiscounted(){
    if (this.product && this.product.discount >= 0) {
      this.isOnSale = true;
      this.discountPrice = this.product?.price - (this.product?.price * this.product?.discount);
    } else {
      this.isOnSale = false;
      this.discountPrice = 9999999999999999.9;
    }
  }

  onDelete(){
    this.productDeletedEvent.emit(this.product);
  }

}
