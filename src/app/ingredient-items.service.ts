import { Injectable } from '@angular/core';
import { IngredientItems } from './ingredient-items';

@Injectable({
  providedIn: 'root'
})
export class IngredientItemsService {

  // ingId: number,
  // ingName: string,
  // ingSubName: string,
  // ingImgUrl: string,
  // ingDesc:string,
  // // vitamins:{
  // //     vitamin1: string,
  // //     vitamin2: string,
  // //     vitamin3: string,
  // //     vitamin4: string,
  // // }
  // vitamins: Array<string>,

  ingredientItemsList:IngredientItems[] =[
    {
      ingId: 1,
      ingName: 'GLUTEN FREE OATMEAL',
      ingSubName: 'GREAT SOURCE OF COMPLEX CARBS',
      ingImgUrl: 'https://i.ibb.co/RP7h2W7/list1.png',
      ingDesc:'Gluten-free oat flakes from naked oats contain 1.5 times more * oat oil and natural vitamin E, are rich in vitamins B1, B2, B6, carotene, magnesium and vitamin K. We buy oatmeal from a manufacturer with an international certificate confirming the absence of gluten in the product.',
      vitamins: ['VITAMIN E', 'MAGNUM', 'IRON', 'B VITAMINS'],
    },
    {
      ingId: 2,
      ingName: 'COCONUT OIL',
      ingSubName: 'SOURCE OF HEALTHY ACIDS',
      ingImgUrl: 'https://i.ibb.co/gvmK1jJ/list2.png',
      ingDesc:' Contains fatty acids - MCT medium chain triglycerides. Provides fast but long-lasting energy and is easily absorbed by the body. And they also help breakdown and excretion from the body, is this not a dream?',
      vitamins: ['VITAMIN C', 'VITAMIN E', 'VITAMIN A', 'OILS'],
    },
    {
      ingId: 3,
      ingName: 'TOPINAMBUR SYRUP',
      ingSubName: 'HEALTHY REPLACEMENT OF SUGAR',
      ingImgUrl: 'https://i.ibb.co/LgqWNsk/list3.png',
      ingDesc:'Topinambur syrup is a natural low glycemic index sweetener, a source of inulin and pectin. Strengthens the immune system and contains B vitamins, vitamin C, pectin, minerals and organic acids. We buy from local manufacturers.',
      vitamins: ['B VITAMINS', 'PECTIN', 'VITAMIN C', 'INULIN'],
    },
    {
      ingId: 4,
      ingName: 'PUMPKIN PROTEIN',
      ingSubName: 'HELP TO COPE WITH STRESS ',
      ingImgUrl: 'https://i.ibb.co/XtqKrfh/list4.png',
      ingDesc:'Pumpkin Protein is a fat-free, ground pumpkin seed. It is 66% protein and contains 18 amino acids. Thanks to the glutamic acid and tryptophan in the composition, pumpkin protein supports a healthy brain and nervous system and helps to cope with stress. Also contains vitamin E, zinc, magnesium, manganese and phosphorus.',
      vitamins: ['VITAMIN E', 'ZINC', 'MAGNUM', 'MANGANESE'],
    }
  ];

  constructor() { }

  getIngredients():IngredientItems[]{
    return this.ingredientItemsList
  }

}
