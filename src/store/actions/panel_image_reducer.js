import * as actionTypes from './actionTypes';
import axios from 'axios';




export const getuser_url = (url) => {
    // console.log(url)
    return {
        type: actionTypes.GET_PANEL_IMAGE_URL,
        panel_imgUrl:url,
    };
};



