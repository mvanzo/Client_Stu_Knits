import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <>
        <nav>
            this is the Navbar||
            <Link to='/'> Home </Link>||
            <Link to='/shop'> Shop </Link>
        </nav>
        </>
    )
}