import {updateObject} from "../utility";
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    form_input:{},
    error: false
};

const get_transport_input_form = (state, action) => {
    // console.log(action.form_details);
    return updateObject( state, {
        form_input:action.form_details,
        error: false
    } );

};

const transport_input_reducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_TRANSPORT_INPUT_FORM: return get_transport_input_form(state, action);
        default: return state;
    }
};

export default transport_input_reducer;