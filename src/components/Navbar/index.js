import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavbarContainer, NavLogo,NavLinks,NavItem,NavMenu,MobileIcon, NavBtn, NavBtnLink } from './NavbarElement'
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo>DigMoney</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/discover">Discover</NavLinks>
                    </NavItem>                    
                    <NavItem>
                        <NavLinks to="/services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>    
        </Nav>  
        </>
    )
}

export default Navbar
