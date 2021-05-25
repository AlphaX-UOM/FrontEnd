import * as actionTypes from './actionTypes';
import axios from 'axios';



export const get_hotel_input_form = (district, check_in, check_out, capacity) => {
    console.log("action");
    console.log(district);
    return {
        type: actionTypes.GET_HOTEL_INPUT_FORM,
        district: district,
        check_in: check_in,
        check_out: check_out,
        capacity: capacity
    };
};

export const set_hotel_district_filter = (district) => {
    console.log(district);
    return {
        type: actionTypes.SET_HOTEL_DISTRICT_FILTER,
        district_filter: district,
    };
};

export const set_hotel_star_filter = (star) => {
    console.log(star);
    return {
        type: actionTypes.SET_HOTEL_STAR_FILTER,
        star_filter: star,
    };
};


export const set_hotel_pricerange_filter = (pricerange) => {
    console.log(pricerange);
    return {
        type: actionTypes.SET_HOTEL_PRICERANGE_FILTER,
        pricerange_filter: pricerange,
    };
};

export const set_hotel_stars_filter = (stars) => {
    console.log(stars);
    return {
        type: actionTypes.SET_HOTEL_STARS_FILTER,
        stars_filter: stars,
    };
};

export const get_hotel_listitem_selected = (name, checkIn, checkOut, stars) => {
    console.log("action");
    console.log(name);
    return {
        type: actionTypes.GET_HOTEL_LISTITEM_SELECTED,
        name: name,
        checkIn: checkIn,
        checkOut: checkOut,
        stars: stars,
    };
};

export const get_hotel_numofrooms_selected = (id, selected_room_name, roomtype, pricePerDay, numofRooms, selected_room_checkIn, selected_room_checkOut, imgURL) => {
    console.log("action");
    console.log(selected_room_name);
    return {
        type: actionTypes.GET_HOTEL_NUMOFROOMS_SELECTED,
        id: id,
        selected_room_name: selected_room_name,
        roomtype: roomtype,
        pricePerDay: pricePerDay,
        numofRooms: numofRooms,
        selected_room_checkIn: selected_room_checkIn,
        selected_room_checkOut: selected_room_checkOut,
        imgURL: imgURL,
    };
};

export const get_room_item_selected = (id) => {
    console.log("room");
    console.log(id);
    return {
        type: actionTypes.GET_ROOM_ITEM_SELECTED,
        selected_roomid: id,
    };
};


export const get_hotel_post_img_url = (url) => {
    console.log("hotel"+url)
    return {
        type: actionTypes.GET_HOTEL_POST_IMAGE_URL,
        hotel_post_imgUrl: url,
    };
};

export const get_hotel_post_img_url1 = (url1) => {
    console.log("room1"+url1)
    return {
        type: actionTypes.GET_HOTEL_POST_IMAGE_URL1,
        hotel_post_imgUrl1:url1,
    };
};

export const get_hotel_post_img_url2 = (url2) => {
    console.log("room2"+url2)
    return {
        type: actionTypes.GET_HOTEL_POST_IMAGE_URL2,
        hotel_post_imgUrl2:url2,
    };
};

export const get_hotel_post_img_url3 = (url3) => {
    console.log("room3"+url3)
    return {
        type: actionTypes.GET_HOTEL_POST_IMAGE_URL3,
        hotel_post_imgUrl3:url3,
    };
};

