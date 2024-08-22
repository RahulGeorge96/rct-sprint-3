import { useState , useReducer, act } from "react"

export const Counter = ()=>{

    let IncAction = {
        type : "Inc"
    }
    let DecAction = {
        type : "Dec"
    }

    const reducer = (state , {type})=>{
      switch(type){
        case "Inc" :
            return {count : state.count+1}
        
        case "Dec" : 
            return {count : state.count-1}   
            
        default :
            return state    
       }
    }

    // 4mins  
 // 1 => 
    const initState = {
        count : 0
    } 
    const [state , dispatch] = useReducer(reducer , initState )

    // by default
    // state => initState
    // dispatch => reducer
    // reducer(state)

    return (
        <div>
           <button onClick={()=>dispatch(DecAction)}>Dec</button>
           <input value={state.count}/>
           <button onClick={()=>dispatch(IncAction)}>Inc</button>
        </div>
    )
}

// useState => re-redered the component when it changed
// useRef