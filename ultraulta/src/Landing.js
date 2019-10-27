import React from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import SearchField from './SearchField';

import Header from './Header.js';
import "./Landing.css"
function Landing(props){

    return(
        <div class = "LandingPage">
            <Row><Col><br></br></Col></Row>
            <Row><Col><br></br></Col></Row>
            <Row><Col><br></br></Col></Row>
            <Row><Col><br></br></Col></Row>
            <Row><Col><br></br></Col></Row>
            <Container>
            <Row>
            <Col md = { {offset:0}}>
            <Header/>
            </Col>
            </Row>

        <Row><Col><br></br></Col></Row>
        <Row><Col><br></br></Col></Row>
        <Row><Col><br></br></Col></Row>
        <Row></Row>
        <Row></Row>

            <SearchField/>
        </Container>
        </div>
    );
}
export default Landing;