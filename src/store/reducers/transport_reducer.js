import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    providers :[],
    error: false,
    // provider:{
    //     id:"",
    //     name:"",
    //     district:"",
    //     pnumber:"",
    //     description:"",
    //     vehicleType: ""
    // },
    provider: []
};


const setTransportProvider = (state, action) => {

    return updateObject( state, {
        // provider:{
        //     id:action.provider.id,
        //     name:action.provider.name,
        //     district:action.provider.district,
        //     pnumber: action.provider.pnumber,
        //     description:action.provider.description,
        //     vehicleType: action.provider.vehicleType
        // }
        provider:action.provider,
        error: false
    } );

};

const fetchTransportProviderFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const setTransport = (state, action) => {
    return updateObject( state, {
        providers:action.providers,
        error: false
    } );
};

const fetchTransportFailed = (state, action) => {
    return updateObject( state, { error: true } );
};


const transport_reducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_TRANSPORT: return setTransport(state, action);
        case actionTypes.FETCH_TRANSPORT_FAILED: return fetchTransportFailed(state, action);
        case actionTypes.SET_TRANSPORT: return setTransportProvider(state, action);
        case actionTypes.FETCH_TRANSPORT_FAILED: return fetchTransportProviderFailed(state, action);
        default: return state;
    }
};

export default transport_reducer;