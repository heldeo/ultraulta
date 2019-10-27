import React from 'react';
import {InputGroup} from 'react-bootstrap'
import {FormControl,Button} from 'react-bootstrap';
function SearchField(){



    return (
            <InputGroup className='mb-3'>
                <FormControl
                placeholder="https://www.youtube.com/Your_Makeup_Video!"

                />
                <InputGroup.Append>
                <Button variant= 'success'>Get Makeup!</Button>
                </InputGroup.Append>
            </InputGroup>

    );



}
export default SearchField;