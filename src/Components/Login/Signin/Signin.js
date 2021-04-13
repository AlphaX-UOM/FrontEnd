import './signin.css';
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import connect from "react-redux/es/connect/connect";
import * as actions from '../../../store/actions/index';
import Select_profile from "../profile/select_profile";
import {auth} from "../../../store/actions/index";

const  SignIn=(props)=>{
    const { onAuth} = props;
    const [state, setstate] = useState({


        email: "",
        password: "",

        errors: {

            email: "",
            password: "",

        },
        isvalid:false
    });
    // Changehandler = (event)=>{
    //     // this.setState({ [event.target.name]: event.target.value })
    //     let input = this.state.input;
    //     input[event.target.name] = event.target.value;
    //     // if(this.validate()){
    //     //
    //     // }
    //     this.setState({
    //         input
    //     },()=>{this.validate()});
    // }

    const  handleSubmit = e=>{
        e.preventDefault();
        errors.email==""&&errors.password==""?state.isvalid=true:state.isvalid=false;
        console.log(state.isvalid);
        if (state.isvalid==true){
            console.log(state);
            // onAuth(state.email,state.password);
            props.onAuth(state.email, state.password);
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
                // if (!validEmailRegex.test(value)) {
                //     errors.email = "Email is not valid!";
                // } else {
                //     errors.email = "";
                //     setstate({
                //         ...state,
                //         email: value,
                //     });
                // }
                errors.email = "";
                setstate({
                    ...state,
                    email: value,
                });
                break;

            case "password":
                if (value.length < 3) {
                    errors.password = "Password must be 6 characters long!";
                } else {
                    errors.password = "";
                    setstate({
                        ...state,
                        password: value,
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




    const { errors } =state;

    if(props.error!==null){
        alert('check your password and email')
    }

    if (props.isAuthenticated ) {

        return (
            <Select_profile/>
        )
    }

    return (
        <div>
            <div className="page-content">
                <div className="form-v5-content">
                    <form className="form-detail" onSubmit={handleSubmit}>
                        <h2 className='signin_txt_col'>Sign In</h2>

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


                        <div className="form-row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <label htmlFor="password" className='signin_txt_col'>Password</label>
                                <input type="password" name="password" id="password" className="input-text"
                                       placeholder="Your Password" onChange={formValChange} required/>
                                <div className=" error_msg rounded-pill center">{state.errors.password}</div>
                            </div>
                            <div className="col-sm-2"></div>


                        </div>



                        <div className="form-row-last">

                            <input type="submit" name="register" className="register" value="Sign In" />


                        </div>

                        <div className="form-row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-4">
                                <small>
                                    <a href="" className="sign_a second_l ">
                                        Forgot password?
                                    </a>
                                </small>

                            </div>
                            <div className="col-sm-5">
                                <small>
                                    <Link to="/signupform" className="second_l">
                                        Don't have an account? Sign Up
                                    </Link>
                                </small>

                                <div className="col-sm-1"></div>
                            </div>


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
        addUserData: (userCred) => {
            dispatch({ type: "ADD_USER", userCred: userCred });
        },
        onAuth: (email, password) => dispatch(auth(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
