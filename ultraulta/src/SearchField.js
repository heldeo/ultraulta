import React from 'react';

import {useEffect, useState} from 'react';
import {InputGroup} from 'react-bootstrap'
import {FormControl,Button} from 'react-bootstrap';

import {Redirect} from 'react-router-dom';
function SearchField(){
    const [redirect,setRedirect] = useState(false);
    const [data,setData] = useState(null);
    function reDirect(apiQuery){

       return <Redirect to={{pathname:"/results", 
       state:{}
        }} />
    }
    function apiCall(){
        fetch("http://9d39e25c.ngrok.io/api/recommended")
        .then(res => res.json())
        .then( (result)=>{
            setData(result);
            setRedirect(true);
            console.log(result);
        })
      }
    

    // useEffect( ()=>{

    //     function apiCall(e){
         
    //       fetch("http://e8cc455e.ngrok.io/api/recommended")
    //       .then(res => res.json())
    //       .then( (result)=>{
    //           console.log(result);
    //       })
    //     }
    //     window.addEventListener('click',apiCall(e));


// //clean up function remove event listener::
//         return function cleanup(){
//             window.removeEventListener('click')
//         }
        

//         //http://e8cc455e.ngrok.io



//     });

      if(redirect){
          data.pop();
          data.pop();
          
          


          return <Redirect to={{pathname:"/results",state:{data} }}/>
      }
    return (
            <InputGroup className='mb-3'>
                {redirect}
                <FormControl
                placeholder="https://www.youtube.com/Your_Makeup_Video!"

                />
                <InputGroup.Append>
                <Button onClick = {apiCall} variant= 'success'>Get Makeup!</Button>
                </InputGroup.Append>
            </InputGroup>
        
    );



}


export default SearchField;