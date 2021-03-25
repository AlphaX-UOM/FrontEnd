import * as actionTypes from './actionTypes';
import axios from 'axios';



export const set_guide_language_filter = (language ) => {
    console.log(language);
    return {
        type: actionTypes.SET_GUIDE_LANGUAGE_TYPE_FILTER,
       language_filter:language,

    };
};
export const set_guide_price_filter = (price ) => {
    console.log(price);
    return {
        type: actionTypes.SET_GUIDE_PRICE_TYPE_FILTER,
       price_filter:price,

    };
};

export const guide_input_form = ( language,date,date1 ) => {
// console.log(language,date,date1);
    return {
        type: actionTypes.GET_GUIDE_INPUT_FORM,
        language:language,
        date:date,
        date1:date1,

    };
};