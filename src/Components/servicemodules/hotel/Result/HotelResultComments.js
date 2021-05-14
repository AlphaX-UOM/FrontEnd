import React from 'react';
import HotelComments from '../Component/Comments/HotelComments';

const HotelResultComment = (props) =>{

    const id = props.id;

    return(
        <div>
            <HotelComments add_id={id}/>
        </div>
    );
}

export default HotelResultComment;