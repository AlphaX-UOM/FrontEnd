import {updateObject} from "../utility";
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    form_pickup_location:{},
    form_pickup_date:{},
    form_pickup_time:{},
    form_drop_location:{},
    form_drop_date:{},
    form_drop_time:{},
    form_no_travellers:{},
    form_rounded:{},
    form_distance_text:{},



    error: false
};

const get_transport_input_form = (state, action) => {
    // console.log(action.form_details);
    return updateObject( state, {
        form_no_travellers:action.form_no_travellers,
        form_drop_location:action.form_drop_location,
        form_drop_date:action.form_drop_date,
        form_drop_time:action.form_drop_time,
        form_pickup_location:action.form_pickup_location,
        form_pickup_date:action.form_pickup_date,
        form_pickup_time:action. form_pickup_time,
        form_rounded:action.form_rounded,
        form_distance_text:action.form_distance_text,
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