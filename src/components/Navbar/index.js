import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>b_d</NavLogo>
                <h1>hey</h1>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
