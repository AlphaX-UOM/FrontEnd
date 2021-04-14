import React, { useEffect, useState } from "react";
import './signup.css';
import axios from "axios";
import {History} from 'react-router-dom';



const SignUp=(props)=>{
    const [state, setstate] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phonenumber:"",
        address:"",
        password: "",
        password2: "",
        dob:'',
        errors: {
            firstName: "",
            lastName: "",
            email: "",
            phonenumber:"",
            dob:'',
            address:"",
            password: "",
            password2: "",
    },
        isvalid:false

});




   const handleSubmit = e=>{
        e.preventDefault();
         errors.lastName==""&&errors.firstName==""&&errors.password2==""&&errors.phonenumber==""&&errors.address==""&&errors.email==""&&errors.password==""?state.isvalid=true:state.isvalid=false;
                // console.log(state.isvalid);
                // console.log(state);


            if (state.isvalid==true){
                axios
                    .post('https://alphax-api.azurewebsites.net/api/users', {
                        firstName:state.firstname,
                        lastName:state.lastname,
                        password:state.password,
                        dOB:state.dob,
                        address:state.address,
                         email:state.email,
                        contact:state.phonenumber,
                       role:"customer",
                        imgURL:""
                    })
                    .then(response => {
                        console.log(response)
                        alert('Register successfully!');
                        props.history.push('/signin')
                    })
                    .catch(error => {
                        console.log(error)
                        alert('fill the form again and submit');

                    })

            }

    }


   // const validate(){
   //      let input = this.state.input;
   //      let errors = {};
   //      let isValid = true;
   //
   //      if (!input["firstname"]) {
   //          isValid = false;
   //          errors["firstname"] = "Please enter your firstname.";
   //      }
   //      if (!input["lastname"]) {
   //          isValid = false;
   //          errors["lastname"] = "Please enter your lastname.";
   //      }
   //
   //      if (!input["email"]) {
   //          isValid = false;
   //          errors["email"] = "Please enter your email Address.";
   //      }
   //
   //      if (typeof input["email"] !== "undefined") {
   //          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
   //          if (!pattern.test(input["email"])) {
   //              isValid = false;
   //              errors["email"] = "Please enter valid email address.";
   //          }
   //
   //      }
   //
   //      if (!input["password"]) {
   //          isValid = false;
   //          errors["password"] = "Please enter your Password.";
   //      }
   //
   //      // if (!input["password"] !=="undefined") {
   //      //     var pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])([A-Za-z\d@$!%*?&]{8,}$)/i);
   //      //     if (!pattern.test(input["password"])) {
   //      //         isValid = false;
   //      //         errors["password"] = "Please enter valid password";
   //      //     }
   //      //
   //      //
   //      // }
   //
   //      if (!input["confirm_password"]) {
   //          isValid = false;
   //          errors["confirm_password"] = "Please enter your confirm Password.";
   //      }
   //
   //      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
   //
   //          if (input["password"] != input["confirm_password"]) {
   //              isValid = false;
   //              errors["password"] = "Passwords don't match.";
   //          }
   //      }
   //
   //      if (!input["tnumber"]) {
   //          isValid = false;
   //          errors["tnumber"] = "Please enter your Phone number.";
   //
   //      }
   //      if (typeof input["tnumber"] !== "undefined") {
   //
   //          var pattern = new RegExp(/^[0-9\b]+$/);
   //          if (!pattern.test(input["tnumber"])) {
   //              isValid = false;
   //              errors["tnumber"] = "Please enter Correct phone number.";
   //          }else if(input["tnumber"].length != 10){
   //              isValid = false;
   //              errors["tnumber"] = "Please enter valid phone number.";
   //          }
   //      }
   //
   //      if (!input["address"]) {
   //          isValid = false;
   //          errors["address"] = "Please enter your address.";
   //      }
   //
   //
   //
   //      this.setState({
   //          errors: errors
   //      });
   //
   //      return isValid;



    const formValChange = (event) => {
        event.preventDefault();
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        const validPnumRegex = RegExp(
            /^[0-9\b]+$/
        );
        const { name, value } = event.target;
        let errors = { ...state.errors };
        switch (name) {
            case "firstName":
                if (value.length < 3) {
                    errors.firstName = "First Name must be 3 characters long!";
                } else {
                    errors.firstName = "";
                    setstate({
                        ...state,
                        firstName: value,
                    });
                }
                break;
            case "lastName":
                if (value.length < 3) {
                    errors.lastName = "Last Name must be 3 characters long!";
                } else {
                    errors.lastName = "";
                    setstate({
                        ...state,
                        lastName: value,
                    });
                }
                break;
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
                break;

            case "phonenumber":
                if (!validPnumRegex.test(value)) {
                    errors.phonenumber = "Phonenumber is not valid!";
                } else {
                    errors.phonenumber = "";
                    setstate({
                        ...state,
                        phonenumber: value,
                    });
                }
                break;
            case "address":
                if (value.length < 3) {
                    errors.address = "address must be 3 characters long!";
                } else {
                    errors.address = "";
                    setstate({
                        ...state,
                        address: value,
                    });
                }
                break;
            case "dob":


                    errors.dob = "";
                    setstate({
                        ...state,
                        dob: value,
                    });


                break;
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



    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    function dateDiffInDays(a, b) {
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
    const a = new Date("2017-01-01"),
        b = new Date("2017-07-25"),
        difference = dateDiffInDays(a, b);



    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    var fifteenYearsAgo = new Date(today);
    fifteenYearsAgo = fifteenYearsAgo.setFullYear(fifteenYearsAgo.getFullYear()-15);
    var x =new Date(fifteenYearsAgo)
    // console.log(x);
    var ddx = String(x.getDate()).padStart(2, '0');
    var mmx = String(x.getMonth() + 1).padStart(2, '0');
    var yyyyx = x.getFullYear();

    var validage = yyyyx + '-' + mmx + '-' + ddx;

    return (
           <div>
               <div className="page-content">
                   <div className="form-v5-content">
                       <form className="form-detail" onSubmit={handleSubmit}>
                           <h2 className='signin_txt_col'>Sign Up</h2>
                           <div className="form-row row">
                               <div className="col-sm-6">
                                   <label htmlFor="full-name" className='signin_txt_col'>First Name</label>
                                   <input type="text" name="firstName"  onChange={formValChange} id="full-name" className="input-text"
                                          placeholder="Your Name" required/>
                                   <div className="error_msg rounded-pill center">{state.errors.firstName}</div>
                               </div>


                               <div className="col-sm-6">
                                   <label htmlFor="full-name" className='signin_txt_col'>Last Name</label>
                                   <input type="text" name="lastName" id="full-name" className="input-text"
                                          placeholder="Your Name"   onChange={formValChange} required/>
                                   <div className="error_msg rounded-pill center">{state.errors.lastName}</div>
                               </div>

                            </div>
                               <div className="form-row row">

                                   <div className="col-sm-6">

                                       <label htmlFor="your-email" className='signin_txt_col'> Email</label>
                                       <input type="text" name="email" id="your-email" className="input-text"
                                              placeholder="Your Email"  onChange={formValChange} required/>
                                       <div className="error_msg rounded-pill center">{state.errors.email}</div>
                                   </div>

                                   <div className="col-sm-6">
                                       <label htmlFor="your-phonenumber" className='signin_txt_col'>Phone Number</label>
                                       <input type="number" name="phonenumber" id="your-phonenumber" className="input-text"
                                              placeholder="Your Phone Number"  onChange={formValChange} required />
                                       <div className="error_msg rounded-pill center">{state.errors.phonenumber}</div>
                                   </div>

                               </div>

                           <div className="form-row row">

                               <div className="col-sm-6">

                                   <label htmlFor="your-address" className='signin_txt_col'>Address</label>
                                   <input type="text" name="address" id="your-address" className="input-text"
                                          placeholder="Your Address"   onChange={formValChange} required/>
                                   <div className="error_msg rounded-pill center">{state.errors.address}</div>
                               </div>

                               <div className="col-sm-6">

                                   <label htmlFor="your-address" className='signin_txt_col'>Date of birth</label>
                                   <input type="date" name="dob" id="your-dob" className="input-text"
                                          placeholder=""   onChange={formValChange} required min='1940-01-01' max={validage}/>
                                   <div className="error_msg rounded-pill center">{state.errors.dob}</div>
                               </div>

                           </div>


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
                               <input type="submit" name="register" className="register" value="Register"/>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
        )


}

export default  SignUp;
