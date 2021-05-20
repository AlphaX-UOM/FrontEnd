import { updateObject } from "../utility";
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    district: {},
    check_in: {},
    check_out: {},
    capacity: {},

    district_filter: null,
    star_filter: null,

    pricerange_filter: null,
    stars_filter: null,

    name: {},
    checkIn: {},
    checkOut: {},
    stars: {},

    id: {},
    selected_room_name: {},
    roomtype: {},
    pricePerDay: {},
    numofRooms: {},
    selected_room_checkIn: {},
    selected_room_checkOut: {},
    imgURL: {},

    selected_roomid:{},
    
    hotel_post_imgUrl: null,
    hotel_post_imgUrl1: null,
    hotel_post_imgUrl2: null,
    hotel_post_imgUrl3: null,


    error: false
};

const get_hotel_input_form = (state, action) => {
    console.log("reducer" + action.district);

    return updateObject(state, {
        district: action.district,
        check_in: action.check_in,
        check_out: action.check_out,
        capacity: action.capacity,
        error: false
    });

};

const set_hotel_district_filter = (state, action) => {
    console.log("reducer" + action.district_filter);
    return updateObject(state, {
        district_filter: action.district_filter,
        error: false
    });
};

const set_hotel_star_filter = (state, action) => {
    console.log("reducer" + action.star_filter);
    return updateObject(state, {
        star_filter: action.star_filter,
        error: false
    });
};

const set_hotel_pricerange_filter = (state, action) => {
    console.log("reducer" + action.pricerange_filter);
    return updateObject(state, {
        pricerange_filter: action.pricerange_filter,
        error: false
    });
};

const set_hotel_stars_filter = (state, action) => {
    console.log("reducer" + action.stars_filter);
    return updateObject(state, {
        stars_filter: action.stars_filter,
        error: false
    });
};

const get_hotel_listitem_selected = (state, action) => {
    console.log("reducer" + action.name);

    return updateObject(state, {
        name: action.name,
        checkIn: action.checkIn,
        checkOut: action.checkOut,
        stars: action.stars,
        error: false
    });

};

const get_room_item_selected = (state, action) => {
    console.log("reducerroom" + action.selected_roomid);

    return updateObject(state, {
        selected_roomid: action.selected_roomid,
        error: false
    });

};

const get_hotel_numofrooms_selected = (state, action) => {
    console.log("reducer" + action.name);

    return updateObject(state, {
        id: action.id,
        selected_room_name: action.selected_room_name,
        roomtype: action.roomtype,
        pricePerDay: action.pricePerDay,
        numofRooms: action.numofRooms,
        selected_room_checkIn: action.selected_room_checkIn,
        selected_room_checkOut: action.selected_room_checkOut,
        imgURL: action.imgURL,
        error: false
    });

};



const get_hotel_post_img_url = (state, action) => {
    console.log("reducer" + action.hotel_post_imgUrl);
    return updateObject(state, {
        hotel_post_imgUrl: action.hotel_post_imgUrl,
        error: false
    });
};

const get_hotel_post_img_url1 = (state, action) => {
    console.log("reducer" + action.hotel_post_imgUrl1);
    return updateObject(state, {
        hotel_post_imgUrl1: action.hotel_post_imgUrl1,
        error: false
    });
};

const get_hotel_post_img_url2 = (state, action) => {
    console.log("reducer" + action.hotel_post_imgUrl2);
    return updateObject(state, {
        hotel_post_imgUrl2: action.hotel_post_imgUrl2,
        error: false
    });
};

const get_hotel_post_img_url3 = (state, action) => {
    console.log("reducer" + action.hotel_post_imgUrl3);
    return updateObject(state, {
        hotel_post_imgUrl3: action.hotel_post_imgUrl3,
        error: false
    });
};

const hotel_input_reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOTEL_INPUT_FORM: return get_hotel_input_form(state, action);
        case actionTypes.SET_HOTEL_DISTRICT_FILTER: return set_hotel_district_filter(state, action);
        case actionTypes.SET_HOTEL_STAR_FILTER: return set_hotel_star_filter(state, action);
        case actionTypes.SET_HOTEL_PRICERANGE_FILTER: return set_hotel_pricerange_filter(state, action);
        case actionTypes.SET_HOTEL_STARS_FILTER: return set_hotel_stars_filter(state, action);
        case actionTypes.GET_HOTEL_LISTITEM_SELECTED: return get_hotel_listitem_selected(state, action);
        case actionTypes.GET_ROOM_ITEM_SELECTED: return get_room_item_selected(state, action);
        case actionTypes.GET_HOTEL_NUMOFROOMS_SELECTED : return get_hotel_numofrooms_selected(state, action);
        case actionTypes.GET_HOTEL_POST_IMAGE_URL: return get_hotel_post_img_url(state, action);
        case actionTypes.GET_HOTEL_POST_IMAGE_URL1: return get_hotel_post_img_url1(state, action);
        case actionTypes.GET_HOTEL_POST_IMAGE_URL2: return get_hotel_post_img_url2(state, action);
        case actionTypes.GET_HOTEL_POST_IMAGE_URL3: return get_hotel_post_img_url3(state, action);
        default: return state;
    }
};

export default hotel_input_reducer;