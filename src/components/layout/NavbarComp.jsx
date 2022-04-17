import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarComp({ handleLogout, currentUser, cart }) {
    const loggedIn = (
        <>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart ({cart.length})</Nav.Link>
            <Nav.Link as={Link} to="/">
                <span onClick={handleLogout}>Log Out</span>
            </Nav.Link>
        </>
    )

    const loggedOut = (
        <>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
        </>
    )

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <div>
                        <Navbar.Brand href="/">Stu Knits</Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {currentUser ? loggedIn : loggedOut}
                                {currentUser && currentUser.admin == true ? <Nav.Link as as={Link} to="/admin"> Admin </Nav.Link> : ''}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}
