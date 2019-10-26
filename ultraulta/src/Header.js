import React from 'react';

import {Navbar} from 'react-bootstrap';
import './Header.css';
function Header(props){



    return(

        <Navbar class = "navbar-inner" >
        <Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>

    );
}


export default Header;