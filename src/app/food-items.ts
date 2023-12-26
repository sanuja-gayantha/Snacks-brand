export interface FoodItems {
    tasteId:number,
    taste:string,
    tasteDesc:string,
    nutrition:{
        protein:number,
        fat:number,
        carbs:number,
        energy:number
    },
    price:number,
    imgUrl:string,
    tasteColor:string
}
