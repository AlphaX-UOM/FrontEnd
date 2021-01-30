import * as actionTypes from './actionTypes';
import axios from 'axios';



export const guide_input_form = ( language,date,date1 ) => {
// console.log(language,date,date1);
    return {
        type: actionTypes.GET_GUIDE_INPUT_FORM,
        language:language,
        date:date,
        date1:date1,

    };
};