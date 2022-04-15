import { Link } from "react-router-dom"

export default function Navbar({ handleLogout, currentUser }){
    const loggedIn = (
        <>
            <Link to="/">
                <span onClick={handleLogout}>Log Out</span>
            </Link>
            {/* <Link to="/profile">Profile</Link> */}
        </>
    )

    const loggedOut = (
        <>
            <Link to="/register">Register</Link>
            <Link to="/login">Log In</Link>
        </>
    )

    
    return(
        <header>
            <div>
                <Link to='/'> Stu Knits </Link>
            </div>
            <div>
                <Link to='/shop'> Shop </Link>
                {currentUser ? loggedIn : loggedOut}
                {currentUser && currentUser.admin == true ? <Link to="/admin">Admin</Link> : ''}
            </div>
        </header>
    )
}