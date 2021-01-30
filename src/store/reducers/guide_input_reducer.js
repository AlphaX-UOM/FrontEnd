import {updateObject} from "../utility";
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    language:{},
    date:{},
    date1:{},

    error: false
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
        default: return state;
    }
};

export default guide_input_reducer;