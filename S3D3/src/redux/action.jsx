import axios from "axios"

export const ADD_BOOKS = "ADD_BOOKS"
export const DELETE_BOOKS = "DELETE_BOOKS"
export const ADD_MORE_BOOKS = "ADD_MORE_BOOKS"

//----------------------------------------

export const THEME_TOGGLE = "THEME_TOGGLE"


//--------------------------------------


let URL = "https://fir-mk-1-default-rtdb.asia-southeast1.firebasedatabase.app/books.json"

    
//--    


export const AddBooks = ()=>{

    return (dispatch)=>{
       axios.get(URL)
       .then((ele)=>{
           dispatch({
            type : ADD_BOOKS , 
            payload : ele.data
          })
       })
    }

}

export const AddMoreBooks = (payload)=>{

    payload = {...payload , id : Math.random().toFixed(2).toString()}

    return (dispatch)=>{
        axios.post(URL , payload)
        .then(()=>{
            dispatch({
                type : ADD_BOOKS , 
                payload : payload
              })
        })
    }

}

export const DeleteBooks = (payload)=>{
    return {
        type : DELETE_BOOKS , 
        payload 
    }
}

// ---------------------------------------

export const ThemeToggle = ()=>{
    return {
        type : THEME_TOGGLE
    }
}