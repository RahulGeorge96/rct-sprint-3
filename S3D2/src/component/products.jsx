import {useDispatch, useSelector} from "react-redux"
import "../styles/products.css"
import { addProductData } from "../redux/productRedux/productActions"
import { addToCart } from "../redux/productRedux/cartActions"

export const Products = ()=>{

    const data = useSelector((state)=>state.product.products)

    // state => {product , cart}

    const dispatch = useDispatch()

    function handleSubmit(e){

        e.preventDefault()

        let obj = {id: Math.random().toFixed(2).toString() , 
                   name : e.target[0].value , 
                   price : e.target[1].value
                }

        let update = addProductData(obj)

        dispatch(update)

        alert("product added in store")

    }

    function handleCart(ele){
        let addCart = addToCart(ele)

        dispatch(addCart)

        alert(`${ele.name} , added to cart`)
    }
  
    return (

        <div>

            <form onSubmit={handleSubmit} className="form-container">
                <input placeholder="product name" />
                <input placeholder="product price" />
                <input type="submit"/>
            </form>

         <div className="container">
           {
             data.map((ele)=>{
                return (
                    <div>
                        <p><b>id : </b>{ele.id}</p>
                        <p><b>Name : </b> {ele.name} </p>
                        <p><b>Price : </b> {ele.price}</p>
                        <button onClick={()=>handleCart(ele)}>Add to Cart</button>
                    </div>
                )
             })
           }
        </div>

        </div>
      
    )
}