import React,{useState} from 'react'
import { Collapse, Container, Nav, Navbar,  NavbarToggler, NavItem } from 'reactstrap'
import {  NavLink} from 'react-router-dom';




const Header = () => {
    const [isNavOpen,toggleNav] = useState(false)
   
  

    return (
        <div id='header'>
                      
            <Navbar id='navbar' expand='lg' fixed-top>
   
               
                <Container>
                    <NavbarToggler id='toggle' onClick={()=>toggleNav(!isNavOpen)}>Menu <i className='fa fa-bars'></i></NavbarToggler>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav  id='nav-items' >
                            <NavItem id="items">
                              <NavLink to='/' onClick={()=>toggleNav(false)}>  Home </NavLink>
                            </NavItem>
                            <NavItem id="items">
                            <NavLink to='/project'  onClick={()=>toggleNav(false)}>  Project</NavLink>
                            </NavItem > 
                            <NavItem id="items">
                            <NavLink to='/about' onClick={()=>toggleNav(false)}>About Us</NavLink>
                            </NavItem >
                            <NavItem id="items">
                            <NavLink to='/contact'  onClick={()=>toggleNav(false)}>  Contact Us</NavLink>
                            </NavItem > 
                        
                        </Nav>

                        <Nav className='ml-auto'  id='nav-items' >
                            <NavItem id="items">
                              <NavLink to='/' onClick={()=>toggleNav(false)}>  Sign In </NavLink>
                            </NavItem>
                            <NavItem id="items">
                              <NavLink to='/' onClick={()=>toggleNav(false)}>  Register </NavLink>
                            </NavItem>
                     
                        
                        </Nav>
                
                    </Collapse>

                    
                </Container>
                
            </Navbar>
        
          
      
            
           
        </div>
    )
}

export default Header
