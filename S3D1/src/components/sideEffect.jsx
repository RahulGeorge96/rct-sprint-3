import { useEffect, useReducer } from "react"

export const SideEffect = ()=>{

    // fetching 

   const fetchReducer = (state , action)=>{

    // action = {
    //     type : "FETCHED", 
    //     payload : [{}]
    // }

    switch(action.type){

        case "FETCHING" :
            return {...state , loading : true}

        case "FETCHED" : 
            return {...state , loading : false , data : action.payload}       

        case "FETCH_FAILED" : 
             return {...state , loading : false , error : true}    
        default : 
          return state
    }

   } 
   // "FETCH_INTIALIZED"
   // "FETCH_SUCCESSFUL"

   //action :  { type , payload }

   let initState = {
        data : [] , 
        loading : false , 
        error : null
   }

   // {loading :true}

   const [state , dispatch] = useReducer(fetchReducer , initState)

   let {data , loading ,error} = state

   useEffect(()=>{

    dispatch({type:"FETCHING"})

    fetch("https://reqres.in/api/users")
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type : "FETCHED" , payload : res.data})
    })
    .catch((err)=>{
        dispatch({type : "FETCH_FAILED" })
    })
        
   } , [])

    return (
        <>
        <div>
            {loading && <h2>...loading</h2>}
            {data.length ?  <h2>Data Fetched</h2>  : <h2>No Data</h2>}
            {error && <h2>Error</h2>}
        </div>
        </>
    )
}