import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientItemComponent } from '../ingredient-item/ingredient-item.component';
import { IngredientItemsService } from '../ingredient-items.service';
import { IngredientItems } from '../ingredient-items';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule, IngredientItemComponent],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent implements OnInit{
  
  ingredientItemsList!:IngredientItems[];

  constructor(private ingredientItems:IngredientItemsService){}

  ngOnInit(): void {
    this.ingredientItemsList=this.ingredientItems.getIngredients();
  }

  

}
