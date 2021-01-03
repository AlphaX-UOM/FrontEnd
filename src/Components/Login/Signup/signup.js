import React,{Component} from 'react';
import './signup.css';




class SignUp extends Component{

    constructor(props){
        super(props)
        this.state={


            input: {},
            errors: {}
        }
        this.Changehandler = this.Changehandler.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    Changehandler = (event)=>{
        // this.setState({ [event.target.name]: event.target.value })
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({
            input
        });
    }

    handleSubmit = e=>{
        e.preventDefault();
        if(this.validate()){
            console.log(this.state);

            // axios
            //     .post('', this.state
            //     )
            //     .then(response => {
            //         console.log(response)
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     });

            let input = {};

            input["firstname"] = "";
            input["lastname"] = "";
            input["email"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            input["tnumber"] = "";
            input["address"] = "";

            this.setState({input:input});

            alert('Demo Form is submited');

        }


    }


    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["firstname"]) {
            isValid = false;
            errors["firstname"] = "Please enter your firstname.";
        }
        if (!input["lastname"]) {
            isValid = false;
            errors["lastname"] = "Please enter your lastname.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof input["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }

        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your Password.";
        }

        // if (!input["password"] !=="undefined") {
        //     var pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])([A-Za-z\d@$!%*?&]{8,}$)/i);
        //     if (!pattern.test(input["password"])) {
        //         isValid = false;
        //         errors["password"] = "Please enter valid password";
        //     }
        //
        //
        // }

        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter your confirm Password.";
        }

        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

            if (input["password"] != input["confirm_password"]) {
                isValid = false;
                errors["password"] = "Passwords don't match.";
            }
        }

        if (!input["tnumber"]) {
            isValid = false;
            errors["tnumber"] = "Please enter your Phone number.";

        }
        if (typeof input["tnumber"] !== "undefined") {

            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(input["tnumber"])) {
                isValid = false;
                errors["tnumber"] = "Please enter Correct phone number.";
            }else if(input["tnumber"].length != 10){
                isValid = false;
                errors["tnumber"] = "Please enter valid phone number.";
            }
        }

        if (!input["address"]) {
            isValid = false;
            errors["address"] = "Please enter your address.";
        }



        this.setState({
            errors: errors
        });

        return isValid;

    }
    render(){


        return (
           <div>
               <div className="page-content">
                   <div className="form-v5-content">
                       <form className="form-detail" onSubmit={this.handleSubmit}>
                           <h2>Sign Up</h2>
                           <div className="form-row row">
                               <div className="col-sm-6">
                                   <label htmlFor="full-name">First Name</label>
                                   <input type="text" name="firstname" value={this.state.input.firstname} onChange={this.Changehandler} id="full-name" className="input-text"
                                          placeholder="Your Name" />
                                   <div className="text-danger">{this.state.errors.firstname}</div>
                               </div>


                               <div className="col-sm-6">
                                   <label htmlFor="full-name">Last Name</label>
                                   <input type="text" name="lastname" id="full-name" className="input-text"
                                          placeholder="Your Name"  value={this.state.input.lastname} onChange={this.Changehandler}/>
                                   <div className="text-danger">{this.state.errors.lastname}</div>
                               </div>

                            </div>
                               <div className="form-row row">

                                   <div className="col-sm-6">

                                       <label htmlFor="your-email"> Email</label>
                                       <input type="text" name="email" id="your-email" className="input-text"
                                              placeholder="Your Email" value={this.state.input.email} onChange={this.Changehandler} />
                                       <div className="text-danger">{this.state.errors.email}</div>
                                   </div>

                                   <div className="col-sm-6">
                                       <label htmlFor="your-phonenumber">Phone Number</label>
                                       <input type="number" name="tnumber" id="your-phonenumber" className="input-text"
                                              placeholder="Your Phone Number" value={this.state.input.tnumber} onChange={this.Changehandler} />
                                       <div className="text-danger">{this.state.errors.tnumber}</div>
                                   </div>

                               </div>

                           <div className="form-row row">

                               <div className="col-sm-7">

                                   <label htmlFor="your-address">Address</label>
                                   <input type="text" name="address" id="your-address" className="input-text"
                                          placeholder="Your Address"   value={this.state.input.address} onChange={this.Changehandler}/>
                                   <div className="text-danger">{this.state.errors.address}</div>
                               </div>


                           </div>


                           <div className="form-row">

                               <div className="col-sm-6">
                                   <label htmlFor="password">Password</label>
                                   <input type="password" name="password" id="password" className="input-text"
                                          placeholder="Your Password"  value={this.state.input.password} onChange={this.Changehandler}/>
                                   <div className="text-danger">{this.state.errors.password}</div>
                               </div>

                               <div className="col-sm-6">
                                   <label htmlFor="password">Confirm Password</label>
                                   <input type="password" name="confirm_password" id="Confirm password" className="input-text"
                                          placeholder="Confirm Password" value={this.state.input.confirm_password} onChange={this.Changehandler}/>
                                   <div className="text-danger">{this.state.errors.confirm_password}</div>
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
        );
    }

}
export default  SignUp;
