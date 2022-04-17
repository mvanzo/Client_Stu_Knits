import React from 'react'
import { 
    Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink 
} from './NavbarElements'

export const NavbarTwo = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h3>Stu Knits</h3>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/shop' activeStyle>
                    Shop
                </NavLink>
                <NavLink to='/checkout' activeStyle>
                    Cart
                </NavLink>
                <NavLink to='/login' activeStyle>
                    Login
                </NavLink>
                <NavLink to='/register' activeStyle>
                    Register
                </NavLink>
                <NavBtnLink to='/logout'>Log Out</NavBtnLink>
            </NavMenu>
            {/* <NavBtn>
                <NavBtnLink to='/logout'>Log Out</NavBtnLink>
            </NavBtn> */}
        </Nav>
    </>
  )
}