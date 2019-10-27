import React from 'react';
import {Col,Row,Container,CardGroup} from 'react-bootstrap';
import Header from './Header';
import Youtube from './Youtube'
import {useEffect,useState} from 'react'
import {CardDeck} from 'react-bootstrap';
// import Queries from './Queries';
import Magna from './Magna';
import Collection from './Collection'
import './Results.css'


function Results(props){


    useEffect(()=>{
        console.log(props);
         
        // console.log(props.pop());
    })
    // const [dataObject,setdataObject] = useState(null);
    // const [dataMap,setdataMap] = useState(null)
    // useEffect(()=>{

    //     console.log(props.location.state.data);
    //     setdataObject(props.location.state.data);
    //     let newArray = []
    //     for(let i = 0 ; i < 3;i++){
    //         newArray.push(props.location.state.data[i]);
    //     }
    //     console.log(props.location.state.data[0]);
    //     const content = newArray.map((post) => 
    //     <Magna name={post.name} price={post.price} productUlr={post.productUlr} picUrl={post.picUrl}/>
    //     );
     
    //     setdataMap(content);


        
    //         console.log(dataObject);
    // })

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
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <Row><Col xs = {12} md={12}><br></br></Col></Row>
            <CardDeck>
                {props.location.state.data.map( (post)=>
                        <Magna name={post.name} price={post.price} productUlr={post.productUlr} picUrl={post.picUrl} time={post.time}/>

                )}
            </CardDeck>
            <Row><Col><br></br></Col></Row>

       
            {/* <CardDeck>
                <Magna/>
                <Magna/>
                 <Magna/>


             </CardDeck>
            <br></br>
             <CardDeck>
                 <Magna/>
                 <Magna/>
                 <Magna/>


             </CardDeck> */}
         
            
            </Container>
        


    );

}

export default Results;



