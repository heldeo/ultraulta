import React, { useEffect } from 'react';
import {Card,CardDeck,Row,Col} from 'react-bootstrap';

import Stock1 from './stock1.jpeg';
import Stock2 from './stock2.jpeg';
import Stock3 from './stock3.jpeg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


import './Magna.css';

function Magna({name,price,picUrl,productUlr,time}){
    useEffect(()=>{
      console.log()
    })
    return(

        
        <Card class = "mw-100" style ={{width:'12em'}} className = "border-dark thick text-center rounded mb-3 flex"  >
          <div>
        <Card.Img  style={{width:'43%',float:"center"}}src={picUrl} />
        </div>
        <Card.Body>
          <Card.Title style={{fontsize:'8'}}>{name}</Card.Title>
          {/* <Card.Text>
              {price}
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Time Stamp: <br></br>{time}</small>
        </Card.Footer>
        
        <a href = {productUlr}>
          <div>
        <Button  style={{float:"top"}} variant="danger" > Find on Ulta!</Button>
        </div>
        <Row><br></br></Row>
        </a>

      </Card>
        );

}

export default Magna;