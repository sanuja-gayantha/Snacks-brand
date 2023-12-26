import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import { FoodItems } from '../food-items';


@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [CommonModule,
  ButtonComponent, FormsModule],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css'
})
export class FoodItemComponent implements OnInit {

  @Input() foodItem!:FoodItems;
  price!:number; 
  qty:number=1;
  total!:number;

  ngOnInit(): void{
    this.price=this.foodItem.price; 
    this.total=this.price;
  }

  incremnt():void{
    this.qty+=1;
    this.total = this.qty*this.price
  }
  decrement():void{
    if(this.qty > 1){
      this.qty-=1;
      this.total = this.qty*this.price
    }
    return;
  }

}
