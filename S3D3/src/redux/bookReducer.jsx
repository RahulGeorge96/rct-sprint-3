import { ADD_BOOKS, DELETE_BOOKS } from "./action"

let initState = {
    books : {}
}

export const BookReducer = (state = initState , {type , payload} ) =>{
    switch(type){
        case ADD_BOOKS : 
           return {...state , 
             books : {...state , ...payload}
           }

        case DELETE_BOOKS : 
            return {
                ...state , 
                books : state.books.filter((ele)=>ele.id !== payload)
            }   

        default : 
          return state    
    }
}

