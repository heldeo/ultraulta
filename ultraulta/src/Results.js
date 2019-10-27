import React from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import Header from './Header';
import Youtube from './Youtube'

import {CardDeck} from 'react-bootstrap';
// import Queries from './Queries';
import Magna from './Magna';
import Collection from './Collection'

function Results(props){



    return(
        <Container>
            <Row>
            <Header/>
            </Row>

            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>


            <Youtube youtubeId={"86K3VXKZSec"}/>
        
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <CardDeck>
                <Magna/>
                <Magna/>
                <Magna/>


            </CardDeck>
            <br></br>
            <CardDeck>
                <Magna/>
                <Magna/>
                <Magna/>


            </CardDeck>
        
            
            </Container>
        


    );

}

export default Results;



