import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  
    imgUrl:null,
    imgUrl1:null,
    imgUrl2:null,
    error: false,
    provider: [],

};



const set_imgURl = (state, action) => {
    // console.log(action.transport_imgUrl)
    return updateObject( state, {
        imgUrl:action.event_imgUrl,
        error: false
    } );
};
const set_imgURl1 = (state, action) => {
    // console.log(action.transport_imgUrl)
    return updateObject( state, {
        imgUrl1:action.event_imgUrl1,
        error: false
    } );
};
const set_imgURl2 = (state, action) => {
    // console.log(action.transport_imgUrl)
    return updateObject( state, {
        imgUrl2:action.event_imgUrl2,
        error: false
    } );
};






const event_reducer = (state = initialState, action ) => {
    switch ( action.type ) {
       
        case actionTypes.GET_EVENT_IMAGE_URL: return set_imgURl(state, action);
        case actionTypes.GET_EVENT_IMAGE_URL1: return set_imgURl1(state, action);
        case actionTypes.GET_EVENT_IMAGE_URL2: return set_imgURl2(state, action)
        default: return state;
    }
};

export default event_reducer;