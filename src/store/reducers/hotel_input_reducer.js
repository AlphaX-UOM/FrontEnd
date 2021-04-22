import { updateObject } from "../utility";
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    district: {},
    check_in: {},
    check_out: {},
    capacity: {},

    district_filter:null,
    star_filter:null,

    pricerange_filter:null,
    stars_filter:null,

    name: {},
    checkIn: {},
    checkOut: {},
    stars:{},
   
    error: false
};

const get_hotel_input_form = (state, action) => {
    console.log("reducer"+action.district);

    return updateObject(state, {
        district: action.district,
        check_in: action.check_in,
        check_out: action.check_out,
        capacity: action.capacity,
        error: false
    });

};

const set_hotel_district_filter = (state,action) => {
    console.log("reducer"+action.district_filter);
    return updateObject(state, {
        district_filter:action.district_filter,
        error: false
    });
};

const set_hotel_star_filter = (state,action) => {
    console.log("reducer"+action.star_filter);
    return updateObject(state, {
        star_filter:action.star_filter,
        error: false
    });
};

const set_hotel_pricerange_filter = (state,action) => {
    console.log("reducer"+action.pricerange_filter);
    return updateObject(state, {
        pricerange_filter:action.pricerange_filter,
        error: false
    });
};

const set_hotel_stars_filter = (state,action) => {
    console.log("reducer"+action.stars_filter);
    return updateObject(state, {
        stars_filter:action.stars_filter,
        error: false
    });
};

const get_hotel_listitem_selected = (state, action) => {
    console.log("reducer"+action.name);

    return updateObject(state, {
        name: action.name,
        checkIn: action.checkIn,
        checkOut: action.checkOut,
        stars: action.stars,
        error: false
    });

};

const hotel_input_reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.GET_HOTEL_INPUT_FORM: return get_hotel_input_form(state, action);
        case actionTypes.SET_HOTEL_DISTRICT_FILTER: return set_hotel_district_filter(state,action);
        case actionTypes.SET_HOTEL_STAR_FILTER: return set_hotel_star_filter(state,action);
        case actionTypes.SET_HOTEL_PRICERANGE_FILTER: return set_hotel_pricerange_filter(state,action);
        case actionTypes.SET_HOTEL_STARS_FILTER: return set_hotel_stars_filter(state,action);
        case actionTypes.GET_HOTEL_LISTITEM_SELECTED: return get_hotel_listitem_selected(state,action);
        default: return state;
    }
};

export default hotel_input_reducer;