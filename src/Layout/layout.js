import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Navbar from "../Components/navbar/nav-bar";

import Post from "../Components/Post/post";
import Login from "../Components/Login/login";
import Transportinput from "../Components/servicemodules/transport/Transport-input/Transport-input";
import Transportproviderlist from "../Containers/Transportproviderlist/transportproviderlist";
import Listitemdetails from "../Components/servicemodules/transport/Listitemdetails/listitemdetails";
import PostguideForm from "../Components/Post/post-tourguide/post-guide";
import PosteventForm from "../Components/Post/post-events/post-events";
import PosthotelForm from "../Components/Post/post-hotels/post-hotels";
import PostTransportProviderForm from "../Components/Post/post-transportprovider/post-tprovider-form";
import Home from "../Components/home/home";
import Footer from "../Components/footer/footer";



class Layoutt extends Component {
    render () {
        return (

                <div>
                    <Navbar/>

                    <Switch>
                        {<Route path="/post" component={Post}/>}
                        <Route path="/login"><Login/></Route>
                        <Route path="/transport"><Transportinput/></Route>
                        <Route path="/post-transportprovider"component={ PostTransportProviderForm}/>
                        <Route path="/post-tourguide"component={ PostguideForm}/>
                        <Route path="/post-event"component={ PosteventForm}/>
                        <Route path="/post-hotel"component={ PosthotelForm}/>
                        <Route path="/transportproviderlist/:id"  component={Listitemdetails}/>
                        <Route path="/transportproviderlist"><Transportproviderlist/></Route>

                        <Route path="/" exact component={Home}/>
                        <Redirect to="/"/>
                    </Switch>

                    <Footer/>
                </div>

        );
    }
}

export default Layoutt;
