import React from 'react';
import RatingDisplay from '../Component/Comments/DisplayRatings';

const HotelResultRating = (props) =>{

    const id = props.id;

    return(
        <div>
            <RatingDisplay id={props.id}/>
        </div>
    );
}

export default HotelResultRating;