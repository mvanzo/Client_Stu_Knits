import { Link } from "react-router-dom"
import Cart from "../Cart"

export default function Navbar({ handleLogout, currentUser, cart }){
    const loggedIn = (
        <>
            <Link to="/">
                <span onClick={handleLogout}> Log Out |</span>
            </Link>
            {/* <Link to="/profile">Profile</Link> */}
        </>
    )

    const loggedOut = (
        <>
            <Link to="/register"> Register |</Link>
            <Link to="/login"> Log In |</Link>
        </>
    )

    return(
        <header className="navbar row block center">
            <div>
                <h2><Link to='/'> Stu Knits </Link></h2>
            </div>
            <div id="nav-links">
                <Link to='/shop'>| Shop |</Link>
                <Link to="/checkout"> Cart({cart.length}) |</Link>
                {currentUser ? loggedIn : loggedOut}
                {currentUser && currentUser.admin == true ? <Link to="/admin"> Admin </Link> : ''}
            </div>
        </header>
    )
}