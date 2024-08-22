import {produce} from "immer"

let state = {
     books : [
        {id:1 , bookName : "Pride and Prejudice" , completed : false , author : "Jane Austen"} ,
        {id:2 , bookName : "Nothing last forever" , completed : false , author : "Sidney Sheldon"} , 
        {id:3 , bookName : "Wings of Fire" , completed : false , author : "APJ Kalam"} , 
        {id:4 , bookName : "The Vinci Code" , completed : false , author : "Dan Brown"} , 
        {id:5 , bookName : "The Lost Chapter" , completed : false , author : "Caroline Cooney"}
     ]
}

let action = {payload : {
         id : 4 , 
         completed : true 
    }}

// let Copy =  {...state , 
//           books : state.books.map((ele)=>(
//                action.payload.id == ele.id ?
//                {...ele , {}completed : action.payload.completed}
//                :
//                ele
//           ))
//      }

let Copy = produce(state , draft=>{
     const book = draft.books.filter(ele => ele.id == action.payload.id)
     

     if(book.length>0){
          book.completed = true
     }
})


     console.log(Copy)
     
     // npm i immer


// function a (){
//     return function b(){
//            return function c(){
//                console.log("hello")
//            }
//      }
// }     

// console.log(a()()())

// // function currying

// function b(){return function c(){
// }}

let operator = (a)=>(b)=>(c)=>{
     console.log("a" , a)
     console.log("b" , b)
     console.log("c" , c)
}