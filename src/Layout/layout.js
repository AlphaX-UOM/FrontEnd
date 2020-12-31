import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Navbar from "../Components/navbar/nav-bar";

import Post from "../Components/Post/post";
import Login from "../Components/Login/login";
import ServiceProvider from "../Components/Userpanels/ServiceProviderUI/Serviceprovider";
import Transportinput from "../Components/servicemodules/transport/Transport-input/Transport-input";
import Transportproviderlist from "../Containers/Transportproviderlist/transportproviderlist";
import Listitemdetails from "../Components/servicemodules/transport/Listitemdetails/listitemdetails";
import PostguideForm from "../Components/Post/post-tourguide/post-guide";
import PosteventForm from "../Components/Post/post-events/post-events";
import PosthotelForm from "../Components/Post/post-hotels/post-hotels";
import PostTransportProviderForm from "../Components/Post/post-transportprovider/post-tprovider-form";
import Home from "../Components/home/home";
import Footer from "../Components/footer/footer";
import Adtransportlist from "../Components/Userpanels/ServiceProviderUI/Ad-Trasnport/Ad-Transport-list/Adtransportlist";
import HotelMain from '../Components/servicemodules/hotel/Component/HotelMain';
import Result from '../Components/servicemodules/hotel/Result/Result';
import Details from '../Components/servicemodules/hotel/Details/Details';
import HotelList from '../Components/servicemodules/hotel/Component/HotelList';

import Form from '../Components/servicemodules/guide/components/Form';
import NameList from '../Components/servicemodules/guide/components/NameList/NameList';
import FormSearch from '../Components/servicemodules/guide/components/formsearch';
import PostGuideForm from '../Components/servicemodules/guide/components/post-guide'
import Events from '../Components/servicemodules/event/Component/Main'
import Event from '../Components/servicemodules/event/Component/Update/Main/Landing';
import CategoryLanding from '../Components/servicemodules/event/Component/Update/Category/CategoryLanding';
import ItemLanding from '../Components/servicemodules/event/Component/Update/Item/ItemLanding';

import ResultList from '../Components/servicemodules/suggestor/Pages/ResultList/ResultList';
import DetailedResult from '../Components/servicemodules/suggestor/Pages/DetailedResult/DetailedResult';
import Payment from '../Components/servicemodules/suggestor/Pages/Checkout/Payment';
import Paypal from '../Components/servicemodules/suggestor/Pages/Checkout/Paypal';
class Layoutt extends Component {
    render () {
        return (

                <div>
                    <Navbar/>

                    <Switch>
                        <Route path='/result' component={ResultList} />
                        <Route path='/paypal' component={Paypal} />
                        <Route path='/detailedresult' component={DetailedResult} />
                        <Route path='/payment' component={Payment} />


                        {/* <Route path='/events' component={Events}/> */}
                        <Route path='/events' component={Event}/>
                        <Route path='/categorylanding' component={CategoryLanding}/>
                        <Route path='/itemlanding' component={ItemLanding}/>

                        <Route path='/PostGuideForm' component={PostGuideForm}/>
                        <Route path='/FormSearch' component={FormSearch}/>
                        <Route path='/NameList' component={NameList}/>
                        <Route path='/guide'>  <Form /> </Route>

                        <Route path="/hotelList"><HotelList/></Route>
                        <Route path="/result"><Result /></Route>
                        <Route path="/details"><Details /></Route>
                        <Route path="/hotel"><HotelMain /></Route>

                        <Route path="/post/post-tourguide"component={ PostguideForm}/>
                        <Route path="/post/post-event"component={ PosteventForm}/>
                        <Route path="/post/post-hotel"component={ PosthotelForm}/>
                        <Route path="/post/post-transportprovider"component={ PostTransportProviderForm}/>
                        <Route path="/post" component={Post}></Route>
                        <Route path="/login"><Login/></Route>
                        <Route path="/serviceprovider" component={ServiceProvider}/>
                        <Route path="/transport"><Transportinput/></Route>
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
