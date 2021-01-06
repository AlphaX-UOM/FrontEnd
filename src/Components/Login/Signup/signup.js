import React, { useEffect, useState } from "react";
import './signup.css';




const SignUp=()=>{
    const [state, setstate] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phonenumber:"",
        address:"",
        password: "",
        password2: "",
        errors: {
            firstName: "",
            lastName: "",
            email: "",
            phonenumber:"",
            address:"",
            password: "",
            password2: "",
    },
        isvalid:false

});




   const handleSubmit = e=>{
        e.preventDefault();
         errors.lastName==""&&errors.firstName==""&&errors.password2==""&&errors.phonenumber==""&&errors.address==""&&errors.email==""&&errors.password==""?state.isvalid=true:state.isvalid=false;
            console.log(state.isvalid);
            if (state.isvalid==true){
                alert('Demo Form is submited');
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
                           <h2>Sign Up</h2>
                           <div className="form-row row">
                               <div className="col-sm-6">
                                   <label htmlFor="full-name">First Name</label>
                                   <input type="text" name="firstName"  onChange={formValChange} id="full-name" className="input-text"
                                          placeholder="Your Name" required/>
                                   <div className="text-danger">{state.errors.firstName}</div>
                               </div>


                               <div className="col-sm-6">
                                   <label htmlFor="full-name">Last Name</label>
                                   <input type="text" name="lastName" id="full-name" className="input-text"
                                          placeholder="Your Name"   onChange={formValChange} required/>
                                   <div className="text-danger">{state.errors.lastName}</div>
                               </div>

                            </div>
                               <div className="form-row row">

                                   <div className="col-sm-6">

                                       <label htmlFor="your-email"> Email</label>
                                       <input type="text" name="email" id="your-email" className="input-text"
                                              placeholder="Your Email"  onChange={formValChange} required/>
                                       <div className="text-danger">{state.errors.email}</div>
                                   </div>

                                   <div className="col-sm-6">
                                       <label htmlFor="your-phonenumber">Phone Number</label>
                                       <input type="number" name="phonenumber" id="your-phonenumber" className="input-text"
                                              placeholder="Your Phone Number"  onChange={formValChange} required />
                                       <div className="text-danger">{state.errors.phonenumber}</div>
                                   </div>

                               </div>

                           <div className="form-row row">

                               <div className="col-sm-7">

                                   <label htmlFor="your-address">Address</label>
                                   <input type="text" name="address" id="your-address" className="input-text"
                                          placeholder="Your Address"   onChange={formValChange} required/>
                                   <div className="text-danger">{state.errors.address}</div>
                               </div>


                           </div>


                           <div className="form-row">

                               <div className="col-sm-6">
                                   <label htmlFor="password">Password</label>
                                   <input type="password" name="password" id="password" className="input-text"
                                          placeholder="Your Password"   onChange={formValChange} required/>
                                   <div className="text-danger">{state.errors.password}</div>
                               </div>

                               <div className="col-sm-6">
                                   <label htmlFor="password">Confirm Password</label>
                                   <input type="password" name="password2" id="Confirm password" className="input-text"
                                          placeholder="Confirm Password"  onChange={formValChange} required/>
                                   <div className="text-danger">{state.errors.password2}</div>
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
