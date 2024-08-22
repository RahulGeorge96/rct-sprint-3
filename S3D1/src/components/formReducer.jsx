import { useState , useReducer } from "react"

export const FormReducer = ()=>{

    const reducer = (state , {type , value , field})=>{
        switch(type){
            case "UPDATE" : 
               return {...state , [field] : value }

            case "ADD_DATA" : 
               let {username , email , password} = state
               return {...state , dataArr : [ ...state.dataArr , {username , email , password}]}    

            default : 
               return state   
        }
    }

    let initState = {
        username : "" , 
        email : "" , 
        password : "" , 
        dataArr : []
    }

    let [state , dispatch] = useReducer(reducer , initState)

    const HandleChange = (e)=>{
       let action = {
          type : "UPDATE" , 
          value : e.target.value , 
          field : e.target.name
       }
      
        dispatch(action)
 
    }

    const HandleSubmit = (e)=>{
        e.preventDefault()
        // console.log(state)
        if(state.email && state.username && state.password){
            dispatch({type: "ADD_DATA"})
        }else{
            alert("please fill the inputs")
        }
        
    } 

    return (
        <>
        <form onSubmit={HandleSubmit}>
            <div>
                <label>
                    UserName : 
                    <input name="username" value={state.username} onChange={HandleChange} />
                </label>
            </div>
            <div>
                <label>
                    UserEmail : 
                    <input name="email" value={state.email} onChange={HandleChange}  />
                </label>
            </div>
            <div>
                <label>
                    UserPassword : 
                    <input name="password" value={state.password} onChange={HandleChange} type="password"/>
                </label>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>

        <div>
                            <table>
                            <thead>
                               <th>S. No </th>
                               <th>Username</th>
                               <th>Email</th>
                               <th>Password</th>
                            </thead>
                            <tbody>
                              {
                                state.dataArr.map((ele , i)=>{
                                    return(
                                        <tr>
                                        <td>{i+1}</td>
                                        <td>{ele.username}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.password}</td>
                                    </tr>
                                    )
                                })
                              }
                            </tbody>
                        </table>
        </div>
        </>
    )

}