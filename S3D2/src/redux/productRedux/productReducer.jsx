import { ADD_PRODUCT_DATA } from "./productActions"

const initState = {
    products : [
        {
            id : 1 , 
            name : "Cap" , 
            price : 100
        },
        {
            id : 2 , 
            name : "Book" , 
            price : 200
        }
    ]
}

export const ProductReducer = (state = initState , {type  , payload})=>{

    switch(type){
         case ADD_PRODUCT_DATA : 
            return {...state ,
                 products : [...state.products , payload]
                }
            
          
         default : 
            return state        
    }

}