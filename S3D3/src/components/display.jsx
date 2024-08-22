import { useSelector , useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { AddBooks } from "../redux/action"

export const Display = ()=>{

    useEffect(()=>{
        dispatch(AddBooks())
     },[])

    let state = useSelector((state)=>state.themeR.theme)
    let data = useSelector((state)=>state.booksR.books)

    const dispatch = useDispatch()

    console.log(Object.entries(data))

    return(
       <div>
          {
            Object.entries(data).map(([id , ele])=>{
                
                    if(ele.bookName && ele.author){
                           return (
                            <div key={id}>
                            <p><b>Book : </b> {ele.bookName}</p>
                            <p><b>author : </b> {ele.author} </p>
                         </div>
                           )
                    }
                   
            })
          }
       </div>
    )
}