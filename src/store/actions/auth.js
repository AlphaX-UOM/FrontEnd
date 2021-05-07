import * as actionTypes from './actionTypes';
import axios from 'axios';
import jwt_decode from "jwt-decode"
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, role) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        role: role
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password) => {
    return dispatch => {

        dispatch(authStart());
        var decodedStringBtoA = email+`:`+password;
        var encodedStringBtoA = btoa(decodedStringBtoA);
        let url = 'https://alphax-api.azurewebsites.net/api/users/LoginProtected';

        var axios = require('axios');
        var config = {
            method: 'post',
            url: url,
            headers: {
                'Authorization': 'Basic '+ encodedStringBtoA,
            },

        };
        axios(config)
            .then(function (response) {

                var decoded = jwt_decode(response.data.token);

                 const expirationDate = new Date(new Date().getTime() + (3600 * 2 * 1000));
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('expirationDate',new Date(decoded.exp*1000));
                        localStorage.setItem('userId', decoded.ID);
                        localStorage.setItem('role', decoded.Role);
                        dispatch(authSuccess(response.data.token, decoded.ID, decoded.Role));
                        dispatch(checkAuthTimeout(3600 * 2));
                        console.log(response)
            })
            .catch(function (error) {
                var str = error.toString();
                var res = str.replace(/\D/g, "");
                if(res==='400') {
                    alert('Check Email and Password');
                }else if (res === '401'){
                    alert('Please Confirm your email')
                }
                // alert(error);
                dispatch(authFail(error));
            });



    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                const role = localStorage.getItem('role');
                dispatch(authSuccess(token, userId, role));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};




