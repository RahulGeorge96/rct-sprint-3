import { useSelector , useDispatch } from "react-redux"
import { increment , decrement , reset } from "../CounterRedux/actions"


export const Counter = ()=>{

    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={()=>dispatch(increment())} >Inc</button>
            <input value={count} />
            <button onClick={()=>dispatch(decrement())}>Dec</button>
        </div>
    )
}


// react-redux
//        - useDispatch() => takes the action and payload , sends it to reducer and 
//                              update the application  
//         - useSelector() =>   provides access to the current store => state                     