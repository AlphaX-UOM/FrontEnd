import React,{Component} from 'react';
import './signin.css';
import {Link} from 'react-router-dom'



class  SignIn extends Component{
    render(){


        return (
            <div>
                <div className="page-content">
                    <div className="form-v5-content">
                        <form className="form-detail" action="#" method="post">
                            <h2>Sign In</h2>

                            <div className="form-row row">

                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <label htmlFor="your-email"> Email</label>
                                    <input type="text" name="your-email" id="your-email" className="input-text"
                                           placeholder="Your Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
                                </div>
                                <div className="col-sm-2"></div>

                            </div>


                            <div className="form-row">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" className="input-text"
                                           placeholder="Your Password" required/>
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
                                        <Link href="" className="">
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
