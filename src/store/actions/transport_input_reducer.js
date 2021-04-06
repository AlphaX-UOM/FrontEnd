import * as actionTypes from './actionTypes';
import axios from 'axios';



export const get_transport_input_form = ( no_travellers,drop_location,drop_date,drop_time,pickup_location,pickup_date,pickup_time,rounded,distance_text ) => {
    // console.log(details);
    return {
        type: actionTypes.GET_TRANSPORT_INPUT_FORM,
        form_no_travellers:no_travellers,
        form_drop_location:drop_location,
        form_drop_date:drop_date,
        form_drop_time:drop_time,
        form_pickup_location:pickup_location,
        form_pickup_date:pickup_date,
        form_pickup_time:pickup_time,
        form_rounded:rounded,
        form_distance_text:distance_text
    };
};