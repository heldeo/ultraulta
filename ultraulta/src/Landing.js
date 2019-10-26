import React from 'react';
import {Col,Row,Container,Form, Button} from 'react-bootstrap';
import SearchField from './SearchField';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header.js';
function Landing(props){

    return(
      <div class="yes">
        <Container>
          <Header/>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <Row>

        <Col>
        </Col>
        <Col id="hi">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter a YouTube link to start searching for products.</Form.Label>
            <Form.Control type="email" placeholder="ex: http://youtube.com/watch?v=" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
        <Col>
        </Col>
        </Row>
        <Row>
        </Row>
        </Container>
        </div>
    );
}
export default Landing;
