import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './component/counter'
import { Products } from './component/products'
import { Cart } from './component/cart'

function App() {

  let [flag , setFlag ] = useState(true)

  return (
    <>
    <button onClick={()=>setFlag(!flag)}>Change Page</button>
       {/* <Counter/> */}
       {
 flag ? 
 <Products/>
 :
 <Cart/>
       }
      
    </>
  )
}

export default App
