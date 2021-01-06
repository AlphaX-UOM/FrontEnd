import * as actionTypes from './actionTypes';
import axios from 'axios';



export const get_transport_input_form = ( details ) => {
    // console.log(details);
    return {
        type: actionTypes.GET_TRANSPORT_INPUT_FORM,
       form_details:details
    };
};