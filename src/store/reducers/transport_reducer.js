import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    providers :[],
    vehicle_type_filter:null,
    price_per_day_filter_02:null,
    price_per_distance_filter_03:null,
    error: false,
    provider: [],

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


const set_transport_vehicle_filter = (state, action) => {
    console.log(action.vehicle_type_filter)
    return updateObject( state, {
        vehicle_type_filter:action.vehicle_type_filter,
        error: false
    } );
};

const set_transport_vehicle_filter_02 = (state, action) => {
    console.log(action. price_per_day_filter_02)
    return updateObject( state, {
        price_per_day_filter_02:action.price_per_day_filter_02,
        error: false
    } );
};

const set_transport_vehicle_filter_03 = (state, action) => {
    console.log(action.price_per_distance_filter_03)
    return updateObject( state, {
        price_per_distance_filter_03:action.price_per_distance_filter_03,
        error: false
    } );
};

const transport_reducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_TRANSPORT: return setTransport(state, action);
        case actionTypes.FETCH_TRANSPORT_FAILED: return fetchTransportFailed(state, action);
        case actionTypes.SET_TRANSPORT: return setTransportProvider(state, action);
        case actionTypes.FETCH_TRANSPORT_FAILED: return fetchTransportProviderFailed(state, action);
        case actionTypes.SET_TRANSPORT_VEHICLE_TYPE_FILTER: return set_transport_vehicle_filter(state, action);
        case actionTypes.SET_TRANSPORT_PRICE_PER_DAY_FILTER_02: return set_transport_vehicle_filter_02(state, action);
        case actionTypes.SET_TRANSPORT_PRICE_PER_DISTANCE_FILTER_03: return set_transport_vehicle_filter_03(state, action);
        default: return state;
    }
};

export default transport_reducer;