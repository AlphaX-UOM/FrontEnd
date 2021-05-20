import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


const Passwordreset=(props)=>{
    const [state, setstate] = useState({

        password: "",
        password2: "",

        errors: {

            password: "",
            password2: "",
        },
        isvalid:false

    });


    const params = useParams();

    const handleSubmit = e=>{
        e.preventDefault();
        errors.password2==""&&errors.password==""?state.isvalid=true:state.isvalid=false;
        // console.log(state.isvalid);
        // console.log(state);


        if (state.isvalid==true){



            console.log(params.id.toString());
            console.log(state.password)

            var decodedStringBtoA = params.id.toString()+`:`+ state.password;
            var encodedStringBtoA = btoa(decodedStringBtoA);
            let url = 'https://alphax-api.azurewebsites.net/api/users/passwordreset';

            var axios = require('axios');
            var config = {
                method: 'put',
                url: url,
                headers: {
                    'Authorization': 'Basic '+ encodedStringBtoA,
                },

            };
            axios(config)
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);

                });

        }

    }





    const formValChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = { ...state.errors };
        switch (name) {
            case "password":
                if (value.length < 6) {
                    errors.password = "Password must be 6 characters long!";
                } else {
                    errors.password = "";
                    setstate({
                        ...state,
                        password: value,
                    });
                }
                break;
            case "password2":
                if (value !== state.password) {
                    errors.password2 = "Passwords must match!";
                } else {
                    errors.password2 = "";
                    setstate({
                        ...state,
                        password2: value,
                    });
                }
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
    const { errors } = state;





    return (
        <div>
            <div className="page-content">
                <div className="form-v5-content">
                    <form className="form-detail" onSubmit={handleSubmit}>
                        <h2 className='signin_txt_col'>Sign Up</h2>





                        <div className="form-row">

                            <div className="col-sm-6">
                                <label htmlFor="password" className='signin_txt_col'>Password</label>
                                <input type="password" name="password" id="password" className="input-text"
                                       placeholder="Your Password"   onChange={formValChange} required/>
                                <div className="error_msg rounded-pill center">{state.errors.password}</div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="password" className='signin_txt_col'>Confirm Password</label>
                                <input type="password" name="password2" id="Confirm password" className="input-text"
                                       placeholder="Confirm Password"  onChange={formValChange} required/>
                                <div className="error_msg rounded-pill center">{state.errors.password2}</div>
                            </div>


                        </div>

                        <div className="form-row">


                        </div>


                        <div className="form-row-last">
                            <input type="submit" name="register" className="register" value="Change Password"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default  Passwordreset;
