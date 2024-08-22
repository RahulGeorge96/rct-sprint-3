import {useNavigate} from "react-router-dom"
import "../styles/navbar.css"

export const Navbar = ()=>{
    const navigate = useNavigate()
    return (
        <div className="navbar">
            <button onClick={()=>navigate('/')}>Books</button>
            <button onClick={()=>navigate('/form')}>form</button>
            <button onClick={()=>navigate('/wishlist')}>Wishlist</button>
        </div>
    )
}