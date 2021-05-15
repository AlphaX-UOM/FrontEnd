import React from 'react';
import RatingDisplay from '../Comments/DisplayRatings';

const RoomResultRating = (props) =>{

    const id = props.id;

    return(
        <div>
            <RatingDisplay id={props.id}/>
        </div>
    );
}

export default RoomResultRating;