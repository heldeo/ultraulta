import React from 'react';
import {CardDeck} from 'react-bootstrap';
import Magna from './Magna';

function Collection(props){
    //Pass in a truth value on whether or not to print each statemnt

    return(
        
        <CardDeck>
        <Magna/>
        <Magna/>
        <Magna/>
        </CardDeck>

    );
}

export default Collection;
