import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodItemsService } from './food-items.service';
import { FoodItems } from './food-items';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ExploreComponent } from './explore/explore.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    FoodItemComponent,
    IngredientsComponent,
    ExploreComponent,
    NewsletterComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  foodItemsList!:FoodItems[];
  
  constructor(private foodItemsService:FoodItemsService){}

  ngOnInit():void{
    this.foodItemsList = this.foodItemsService.getFoodItems()
  } 

}
