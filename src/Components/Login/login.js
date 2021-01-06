import React from 'react';
import {Link} from 'react-router-dom'
import Signup from './Signup/signup'
import Test from './test'
import Signin from './Signin/Signin'
const login=()=>{
    return(
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-sm">
                        <button type="button" className="btn btn-primary">Admin</button>
                    </div>
                    <div className="col-sm">
                        <button type="button" className="btn btn-primary">Customer</button>
                    </div>
                    <div className="col-sm">
                        <Link to={'/serviceprovider/myaccountsp'}>
                            <button type="button" className="btn btn-primary">Service Provider</button>
                        </Link>

                    </div>
                </div>
            </div>


            <br/>
            {/*<Signup/>*/}
            <Signin/>
            {/*<Test/>*/}
        </div>
    )
};

export default login;