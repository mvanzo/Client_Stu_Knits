import { Link } from "react-router-dom"

export default function Navbar({ currentUser }){
    return(
        <>
        <nav>
            <Link to='/'> Home </Link>
            <Link to='/shop'> Shop </Link>
            {currentUser ? 
            <Link to='/logout'> Log Out </Link>
            :
            <div>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
            }
        </nav>
        </>
    )
}