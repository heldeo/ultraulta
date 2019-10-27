import React from 'react';
import {Col,Row,Container,Form, Button} from 'react-bootstrap';
import SearchField from './SearchField';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header.js';
class Landing extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <div class="yes">
        <Container>
          <Header/>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <Row>

        <Col>
        </Col>
        <Col id="hi">
        <Form onSubmit = {this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter a YouTube link to start searching for products.</Form.Label>
            <Form.Control placeholder="ex: http://youtube.com/watch?v=" />
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
        <Col></Col>
        <Col>
        </Col>
        <Col></Col>
        </Row>
        <iframe id="player" type="text/html" width="640" height="390"
  src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
  frameborder="0"></iframe>
        <p id="test">hi</p>
        </Container>
        </div>
    );
  }
}
/*
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
*/
export default Landing;
