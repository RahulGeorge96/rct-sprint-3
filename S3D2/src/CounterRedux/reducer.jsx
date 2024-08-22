import { DECREMENT, INCREMENT, RESET } from "./actions"

const initState = {
    count : 0 , 
}

export const Reducer = (state = initState , action )=>{
  const {type} = action

  switch(type){

    case INCREMENT : 
         return  {...state , count : state.count+1}

    case DECREMENT : 
         return  {...state , count : state.count-1}

    case RESET : 
         return {...state , count : 0}  
         
    default :
         return state     

  }

}