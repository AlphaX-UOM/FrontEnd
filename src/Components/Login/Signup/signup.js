import React,{Component} from 'react';
import './signup.css';




class SignUp extends Component{
    render(){


        return (
           <div>
               <div className="page-content">
                   <div className="form-v5-content">
                       <form className="form-detail" action="#" method="post">
                           <h2>Sign Up</h2>
                           <div className="form-row row">
                               <div className="col-sm-6">
                                   <label htmlFor="full-name">First Name</label>
                                   <input type="text" name="full-name" id="full-name" className="input-text"
                                          placeholder="Your Name" required/>
                               </div>
                               <div className="col-sm-6">
                                   <label htmlFor="full-name">Last Name</label>
                                   <input type="text" name="full-name" id="full-name" className="input-text"
                                          placeholder="Your Name" required/>
                               </div>

                            </div>
                               <div className="form-row row">

                                   <div className="col-sm-6">

                                       <label htmlFor="your-email"> Email</label>
                                       <input type="text" name="your-email" id="your-email" className="input-text"
                                              placeholder="Your Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
                                   </div>

                                   <div className="col-sm-6">
                                       <label htmlFor="your-phonenumber">Phone Number</label>
                                       <input type="number" name="your-phonenumber" id="your-phonenumber" className="input-text"
                                              placeholder="Your Phone Number" />
                                   </div>

                               </div>

                           <div className="form-row row">

                               <div className="col-sm-7">

                                   <label htmlFor="your-address">Address</label>
                                   <input type="text" name="your-address" id="your-address" className="input-text"
                                          placeholder="Your Address" required />
                               </div>


                           </div>



                           <div className="form-row">


                           </div>



                           <div className="form-row">

                               <div className="col-sm-6">
                                   <label htmlFor="password">Password</label>
                                   <input type="password" name="password" id="password" className="input-text"
                                          placeholder="Your Password" required/>
                               </div>

                               <div className="col-sm-6">
                                   <label htmlFor="password">Confirm Password</label>
                                   <input type="password" name="Confirm password" id="Confirm password" className="input-text"
                                          placeholder="Confirm Password" required/>
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
