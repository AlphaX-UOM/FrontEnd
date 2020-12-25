import React,{Component }  from 'react';
import './Serviceprovider.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import MyAccountsp from "./MyAccount/myaccount-sp";
import MyAccounteditsp from "./MyAccountedit/myaccountedit";
import {Link} from 'react-router-dom'
import Layout from "../../../Layout/layout";

class Serviceprovider extends Component{
    constructor(props){
        super(props)

        this.state = {

        };
    }





    render() {


        return (

            <div className="backcol">
                <div className="container-fluid " >
                    <div className="row  ">

                    </div>
                </div>
                <div className="container-fluid marge" >
                    <div className="row ">
                        <div className="col-sm-2  ">

                        </div>
                        <div className="col-sm-8 h">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="row">
                                        <div className="col-sm ">
                                            <p className="h6 sidemarge">Account</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <Link to={'/serviceprovider/myaccountsp'}>
                                        <div className="row">
                                            <div className="col-sm sidesubmargediv">
                                                <p className=" sidesubmarge">My account</p>
                                            </div>
                                        </div>

                                    </Link>


                                    <Link to={'/serviceprovider/myaccountedit'}>
                                        <div className="row">
                                            <div className="col-sm sidesubmargediv" >
                                                <p className=" sidesubmarge">Edit account</p>
                                            </div>
                                        </div>
                                    </Link>


                                </div>

                                <div className="col-sm-9">
                                    <p className="h5 marge">User name</p>
                                    <hr/>



                                        <switch>
                                            <Route path={this.props.match.url+"/myaccountsp"} component={MyAccountsp}/>
                                            <Route path={this.props.match.url+"/myaccountedit"} component={MyAccounteditsp}/>
                                        </switch>




                                </div>
                            </div>

                        </div>
                        <div className="col-sm-2 ">

                        </div>
                    </div>
                </div>
                <div className="container-fluid " >
                    <div className="row  ">

                    </div>
                </div>
            </div>

        );

    }
}

export default Serviceprovider;
