import { useState } from 'react'
import {Routes , Route} from "react-router-dom"
import './App.css'
import { Form } from './components/form'
import { Display } from './components/display'
import { Wishlist } from './components/wishlist'
import { Navbar } from './components/navbar'

function App() {

  return (
    <>

    <Navbar/>

    <div className='container'>
      <Routes>
        <Route path='/form' element={<Form/>}/>
        <Route path='/' element={<Display/>}/>
        <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>
    </div>
     
    </>
  )
}

export default App
