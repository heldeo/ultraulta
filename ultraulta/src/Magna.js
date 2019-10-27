import React from 'react';
import {Card,CardDeck,Row,Col} from 'react-bootstrap';

import Stock1 from './stock1.jpeg';
import Stock2 from './stock2.jpeg';
import Stock3 from './stock3.jpeg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


import './Magna.css';

function Magna(props){

    return(

        
        <Card style ={{width:'6em'}} className = "border-dark text-center rounded mb-0"  >
        <Card.Img  src={Stock1} />
        <Card.Body>
          <Card.Title>Item</Card.Title>
          <Card.Text>
              Appearance: 
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        <Button variant="primary">Find in Market</Button>

      </Card>
        );

}

export default Magna;