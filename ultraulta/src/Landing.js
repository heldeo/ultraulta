import React from 'react';
import {Col,Row,Container,Image} from 'react-bootstrap';
import SearchField from './SearchField';

import './Title.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Landing(props){

    return(
        // <div className="logo-header">
        //     <img src={require('./logo.png')} alt="Ulta Logo" className= "logo"/>
        // </div>
        <div>
        <img className='img-back' src={require('./ultra-background.jpg')} alt='Back'/>
        <img className='img-logo' src={require('./logo.png')} alt='Logo'/>

        <Container className='header'>
            <Row className='row'>
                <Col><br/></Col>
            </Row>
            <Row>
            <Col md={{span:12}}>{<h1 className='title'>FIND <br/> YOUR PRODUCTS</h1>}</Col>
            </Row>
        </Container>
        </div>
    );
  }
export default Landing;

