import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientItems } from '../ingredient-items';

@Component({
  selector: 'app-ingredient-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredient-item.component.html',
  styleUrl: './ingredient-item.component.css'
})
export class IngredientItemComponent {
  
  @Input()ingredientItem!: IngredientItems;
  show:boolean = false;

  showHide():void{
    this.show=!this.show;
  }


}
