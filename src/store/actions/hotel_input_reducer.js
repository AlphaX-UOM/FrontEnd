import * as actionTypes from './actionTypes';
import axios from 'axios';



export const get_hotel_input_form = ( district, check_in, check_out, capacity) => {
    console.log("action");
    console.log(district);
    return {
        type: actionTypes.GET_HOTEL_INPUT_FORM,
        district:district,
        check_in:check_in,
        check_out:check_out,
        capacity:capacity 
    };
};

export const set_hotel_district_filter = (district ) => {
    console.log(district);
    return {
        type: actionTypes.SET_HOTEL_DISTRICT_FILTER,
       district_filter:district,
    };
};

export const set_hotel_price_filter = (price) => {
    console.log(price);
    return {
        type: actionTypes.SET_HOTEL_PRICE_FILTER,
       price_filter:price,
    };
};

export const set_hotel_pricerange_filter = (pricerange) => {
    console.log(pricerange);
    return {
        type: actionTypes.SET_HOTEL_PRICERANGE_FILTER,
        pricerange_filter:pricerange,
    };
};

export const set_hotel_stars_filter = (stars) => {
    console.log(stars);
    return {
        type: actionTypes.SET_HOTEL_STARS_FILTER,
        stars_filter:stars,
    };
};