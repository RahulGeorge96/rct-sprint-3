import { THEME_TOGGLE } from "./action"

let initState = {
    theme : false
}

export const ThemeReducer = (state = initState , action)=>{
    switch(action.type){
        case THEME_TOGGLE : 
            return {
                ...state , 
                theme : !(state.theme)
            }


        default :
          return state    
    }
}