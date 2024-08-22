import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../redux/productRedux/cartActions"

export const Cart = ()=>{

    const data = useSelector((state)=>state.cart.carts)
    const dispatch = useDispatch()

    function handleCart(ele){

        let payload = removeFromCart(ele.id)
        dispatch(payload)
        alert(`${ele.name} , removed from cart`)

    }

    return (
        <div>
            <div className="container">
           {
             data.map((ele)=>{
                return (
                    <div>
                        <p><b>id : </b>{ele.id}</p>
                        <p><b>Name : </b> {ele.name} </p>
                        <p><b>Price : </b> {ele.price}</p>
                        <button onClick={()=>handleCart(ele)}>Remove from Cart</button>
                    </div>
                )
             })
           }
        </div>
        </div>
    )
}