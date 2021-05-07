
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import connect from "react-redux/es/connect/connect";
import * as actions from '../../../store/actions/index';
import Select_profile from "../profile/select_profile";
import {auth} from "../../../store/actions/index";
import jwt_decode from "jwt-decode";
import {authFail, authSuccess, checkAuthTimeout} from "../../../store/actions/auth";

const  Forgotpassword=(props)=>{
    const { onAuth} = props;
    const [state, setstate] = useState({


        email: "",

        errors: {
            email: "",
        },
        isvalid:false
    });


    const  handleSubmit = e=>{
        e.preventDefault();
        errors.email==""?state.isvalid=true:state.isvalid=false;
        console.log(state.isvalid);
        if (state.isvalid==true){
            console.log(state);

            var decodedStringBtoA = `email`+`:`+ state.email;
            var encodedStringBtoA = btoa(decodedStringBtoA);
            let url = 'https://alphax-api.azurewebsites.net/api/users/checkemail';

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
                    console.log(response.status)
                    if(response.status.toString()==='200'){
                        alert('Password reset link sent. Please Check your Email')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    var str = error.toString();
                    var res = str.replace(/\D/g, "");
                    if(res==='404') {
                        alert('Please enter the correct email');
                    }

                });

        }

    }

    const  formValChange = (event) => {
        event.preventDefault();
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        const { name, value } = event.target;
        let errors = { ...state.errors };
        switch (name) {


            case "email":
                if (!validEmailRegex.test(value)) {
                    errors.email = "Email is not valid!";
                } else {
                    errors.email = "";
                    setstate({
                        ...state,
                        email: value,
                    });
                }
                errors.email = "";
                setstate({
                    ...state,
                    email: value,
                });
                break;

            default:
                break;
        }

        setstate({
            ...state,
            errors,
            [name]: value,
        });
    };




    const { errors } =state;



    return (
        <div>
            <div className="page-content">
                <div className="form-v5-content">
                    <form className="form-detail" onSubmit={handleSubmit}>
                        <h2 className='signin_txt_col'>Forgot Password</h2>

                        <div className="form-row row">

                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <label htmlFor="your-email" className='signin_txt_col'> Email</label>
                                <input type="text" name="email" id="your-email" className="input-text"
                                       placeholder="Your Email"  onChange={formValChange} required/>
                                <div className="error_msg rounded-pill center">{state.errors.email}</div>
                            </div>
                            <div className="col-sm-2"></div>

                        </div>



                        <div className="form-row-last">

                            <input type="submit" name="register" className="register" value="Sign In" />


                        </div>

                    </form>
                </div>
            </div>
        </div>
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forgotpassword);
