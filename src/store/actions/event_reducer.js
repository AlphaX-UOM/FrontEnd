import * as actionTypes from './actionTypes';
import axios from 'axios';





export const geteve_url = (url) => {
    // console.log(url)
    return {
        type: actionTypes.GET_EVENT_IMAGE_URL,
        event_imgUrl:url,
    };
};


export const geteve_url1 = (url1) => {
    // console.log(url)
    return {
        type: actionTypes.GET_EVENT_IMAGE_URL1,
        event_imgUrl1:url1,
    };
};

export const geteve_url2 = (url2) => {
    // console.log(url)
    return {
        type: actionTypes.GET_EVENT_IMAGE_URL2,
        event_imgUrl2:url2,
    };
};



