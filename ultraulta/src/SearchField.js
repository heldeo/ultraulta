import React from 'react';
import {InputGroup} from 'react-bootstrap'
import {FormControl,Button} from 'react-bootstrap';
function SearchField(){



    return (
            <InputGroup className='mb-3'>
                <FormControl
                placeholdder="https://www.youtube.com/watch?v=C7FxWHd_vsk"

                />
                <InputGroup.Append>
                <Button variant='outline-primary'>Get Makeup!</Button>
                </InputGroup.Append>
            </InputGroup>

    );



}


export default SearchField;