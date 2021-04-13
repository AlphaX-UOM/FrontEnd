import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import AdminPanel from '../../pannels/adminPannel/adminpannel';
import CustomerPanel from '../../pannels/CustomerPannel/customerPannel';
import ServicePanel from '../../pannels/serviceProvider/sppannel';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import {auth} from '../../../store/actions/auth';



function select_profile(props) {



    if (props.isAuthenticated && props.role==="Customer") {
        console.log(props.userid);
        return (
            <CustomerPanel myId={props.userid}/>
        )
    }

    if (props.isAuthenticated && props.role==="ServiceProvider") {
        return (
            <ServicePanel myId={props.userid}/>
        )
    }

    if ( props.isAuthenticated && props.role==="Admin") {
        return (
            <AdminPanel myId={props.userid}/>
        )
    }

    return (
       <div></div>
    );
}

const mapStateToProps = (state) => {
    return {
        userCred: state.eventpnl.userCred,
        isAuthenticated: state.auth.token !== null,
        role:state.auth.role,
        userid:state.auth.userId,
        loading: state.auth.loading,
        error: state.auth.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUserData: (userCred) => {
            dispatch({ type: "ADD_USER", userCred: userCred });
        },
        onAuth: (email, password) => dispatch(auth(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(select_profile);