import React from 'react';

import {useEffect, useState,useRef} from 'react';
import {InputGroup} from 'react-bootstrap'
import {FormControl,Button} from 'react-bootstrap';

import {Redirect} from 'react-router-dom';
function SearchField(){
    const [redirect,setRedirect] = useState(false);
    const [data,setData] = useState(null);
    const inputForm = useRef(null);
    let StringL
    // const [getY,setY] = useState('');
    let StringOnChange = "";
    function reDirect(apiQuery){

       return <Redirect to={{pathname:"/results", 
       state:{}
        }} />
    }
    function apiCall(){
        fetch("http://41c5a1a4.ngrok.io/api/recommended")
        .then(res => res.json())
        .then( (result)=>{
            setData(result);
            setRedirect(true);
            StringL  = inputForm.value;
            // console.log(data);
            // console.log(result);
        })
      }
    
      function handleChange(e){
        StringOnChange = e.value;
      }
  

      if(redirect){
        data.pop();
        data.pop();
        data.pop();
        console.log("InputForm: " + StringL);
          return <Redirect to={{pathname:"/results",state:{data} }}/>
      }
    return (
            <InputGroup className='mb-3'>
                {redirect}
                <FormControl ref={inputForm}type = 'text' onChange={handleChange}
                placeholder="https://www.youtube.com/Your_Makeup_Video!"

                />
                <InputGroup.Append>
                <Button onClick = {apiCall} variant= 'info'>Get Makeup!</Button>
                </InputGroup.Append>
            </InputGroup>
        
    );



}


export default SearchField;