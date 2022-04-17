import { Navbar, Nav, Container } from 'react-bootstrap'

export default function NavbarComp({ handleLogout, currentUser, cart }) {
    const loggedIn = (
        <>
            <Nav.Link to="/">
                <span onClick={handleLogout}>Log Out</span>
            </Nav.Link>
            {/* <Link to="/profile">Profile</Link> */}
        </>
    )

    const loggedOut = (
        <>
            <Nav.Link to="/register">Register</Nav.Link>
            <Nav.Link to="/login">Log In</Nav.Link>
        </>
    )

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Stu Knits</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/checkout">Cart ({cart.length})</Nav.Link>
                            {currentUser ? loggedIn : loggedOut}
                            {currentUser && currentUser.admin == true ? <Nav.Link to="/admin"> Admin </Nav.Link> : ''}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
