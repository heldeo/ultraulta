import React from 'react';

import {Navbar,Container,Col,Row} from 'react-bootstrap';
import './Header.css';
import Logo from './logo.png';
function Header(props){



    return(
        <Navbar class = "navbar-inner"className='justify-content-center' >
        <Navbar.Brand class ='navbar-logo'>
          <img 
            src={Logo}
            width="250"
            height="85"
            className="d-inline-block align-bottom"
            alt="React Bootstrap logo"
            class = "navbar-inner"
          />
        </Navbar.Brand>
      </Navbar>
    );
}


export default Header;