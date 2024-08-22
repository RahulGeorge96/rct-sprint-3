import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActions"

const initState = {
    carts : []
}

export const CartReducer = (state = initState , {type , payload}) =>{
    switch(type){
        case ADD_TO_CART : 
             return {...state , carts : [...state.carts , payload]}

        case REMOVE_FROM_CART :     
             return {...state , 
                carts : state.carts.filter((ele)=>ele.id !== payload)
             } 

        default : 
            return state     
    }
}

