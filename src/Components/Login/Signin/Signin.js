import React,{Component} from 'react';
import './signin.css';
import {Link} from 'react-router-dom'



class  SignIn extends Component{
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


            input["email"] = "";
            input["password"] = "";


            this.setState({input:input});

            alert('Demo Form is submited');

        }


    }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;


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
                            <h2>Sign In</h2>

                            <div className="form-row row">

                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <label htmlFor="your-email"> Email</label>
                                    <input type="text" name="email" id="your-email" className="input-text"
                                           placeholder="Your Email" value={this.state.input.email} onChange={this.Changehandler} />
                                    <div className="text-danger">{this.state.errors.email}</div>
                                </div>
                                <div className="col-sm-2"></div>

                            </div>


                            <div className="form-row">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" className="input-text"
                                           placeholder="Your Password" value={this.state.input.password} onChange={this.Changehandler} />
                                    <div className="text-danger">{this.state.errors.password}</div>
                                </div>
                                <div className="col-sm-2"></div>


                            </div>



                            <div className="form-row-last">

                                    <input type="submit" name="register" className="register" value="Sign In"/>


                            </div>

                            <div className="form-row">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-4">
                                    <small>
                                        <a href="" className="sign_a">
                                            Forgot password?
                                            </a>
                                    </small>

                                </div>
                                <div className="col-sm-5">
                                    <small>
                                        <Link to="/signupform" className="">
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

}
export default  SignIn;
