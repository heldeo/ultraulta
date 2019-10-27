import React, { useEffect } from 'react';
import {Card,CardDeck,Row,Col} from 'react-bootstrap';

import Stock1 from './stock1.jpeg';
import Stock2 from './stock2.jpeg';
import Stock3 from './stock3.jpeg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


import './Magna.css';

function Magna({name,price,picUrl,productUlr}){
    useEffect(()=>{
      console.log()
    })
    return(

        
        <Card style ={{width:'6em'}} className = "border-dark text-center rounded mb-0"  >
          <div>
        <Card.Img  style={{width:'40%',float:"center"}}src={picUrl} />
        </div>
        <Card.Body>
          <Card.Title style={{fontsize:'8'}}>{name}</Card.Title>
          <Card.Text>
              {price}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        <a href = {productUlr}>
          <div>
        <Button className='align-text-top' variant="danger" size='lg'> Find on Ulta!</Button>
        </div>
        </a>

      </Card>
        );

}

export default Magna;