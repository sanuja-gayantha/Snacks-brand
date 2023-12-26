import { Injectable } from '@angular/core';
import { FoodItems } from './food-items';

@Injectable({
  providedIn: 'root'
})
export class FoodItemsService {

  // tasteId:number,
  // taste:string,
  // tasteDesc:string,
  // nutrition:{
  //     protein:number,
  //     fat:number,
  //     carbs:number,
  //     energy:number
  // },
  // price:number,
  // imgUrl:string

  foodItemsList:FoodItems[]=[
    {
      tasteId:1,
      taste:' CHOCOLATE ',
      tasteDesc:'For lovers of rich chocolate flavor. The perfect addition to your favorite coffee.',
      nutrition:{
          protein:12.15,
          fat:12.15,
          carbs:14.5,
          energy:205.7
      },
      price:80,
      imgUrl:'https://i.ibb.co/KXGD8wh/hightlights1.jpg',
      tasteColor:'bg-[#a388b2]'
    },
    {
      tasteId:2,
      taste:'ALMOND',
      tasteDesc:'Almonds are a good source of nutrients that are important for brain health.',
      nutrition:{
          protein:11.75,
          fat:14.15,
          carbs:16.7,
          energy:234.1
      },
      price:65,
      imgUrl:'https://i.ibb.co/PDgh1p6/image2.jpg',
      tasteColor:'bg-[#f8c37e]'
      
    },

  ]

  constructor() { }

  getFoodItems():FoodItems[]{
    return this.foodItemsList;
  }
}
