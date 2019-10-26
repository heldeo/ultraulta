import React from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';



function App(props) {
  return (
    <div className="App">
      {props.children}
    </div>
  );
}

export default App;
