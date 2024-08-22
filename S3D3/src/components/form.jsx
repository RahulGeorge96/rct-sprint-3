import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AddMoreBooks, ThemeToggle } from "../redux/action"
import axios from "axios"

export const Form = ()=>{

    let dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        let payload = {
            bookName : e.target[0].value , 
            author : e.target[1].value , 
            completed : e.target[2].value == "true" ? true : false 
        }
        dispatch(AddMoreBooks(payload))

        alert("data added")
 
    }

 
    return(
        <form onSubmit={handleSubmit}>
           <input placeholder="book name"/>
           <input placeholder="author name"/>
           <select>
               <option>completed</option>
               <option value="true">Done</option>
               <option value="false">Reading</option>
           </select>
           <input type="submit" />
        </form>
    )
}