import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  
    imgUrl:null,
  
    error: false,
    provider: [],

};



const set_imgURl = (state, action) => {
    // console.log(action.transport_imgUrl)
    return updateObject( state, {
        imgUrl:action.panel_imgUrl,
        error: false
    } );
};






const event_reducer = (state = initialState, action ) => {
    switch ( action.type ) {
       
        case actionTypes.GET_PANEL_IMAGE_URL: return set_imgURl(state, action);
      
        default: return state;
    }
};

export default event_reducer;