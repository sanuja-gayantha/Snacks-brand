export interface IngredientItems {
    ingId: number,
    ingName: string,
    ingSubName: string,
    ingImgUrl: string,
    ingDesc:string,
    // vitamins:{
    //     vitamin1: string,
    //     vitamin2: string,
    //     vitamin3: string,
    //     vitamin4: string,
    // }
    vitamins: Array<string>,

}
