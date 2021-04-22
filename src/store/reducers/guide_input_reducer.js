import {updateObject} from "../utility";
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    language:{},
    date:{},
    date1:{},
    language_filter:null,
    price_filter:null,

    error: false
};


const set_guide_language_filter = (state, action) => {
    console.log(action.language_filter)
    return updateObject( state, {
        language_filter:action.language_filter,
        error: false
    } );
};

const set_guide_price_filter = (state, action) => {
    console.log(action.price_filter)
    return updateObject( state, {
        price_filter:action.price_filter,
        error: false
    } );
};

const guide_input_form = (state, action) => {
    // console.log(action.form_details);
    return updateObject( state, {
        language:action.language,
        date:action.date,
        date1:action.date1,

        error: false
    } );

};

const guide_input_reducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_GUIDE_INPUT_FORM: return guide_input_form(state, action);
        case actionTypes.SET_GUIDE_LANGUAGE_TYPE_FILTER: return  set_guide_language_filter(state, action);
        case actionTypes.SET_GUIDE_PRICE_TYPE_FILTER: return  set_guide_price_filter(state, action);
        default: return state;
    }
};

export default guide_input_reducer;