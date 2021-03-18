import React,{Component, useEffect, useState }  from 'react';
import Listitem from '../../Components/servicemodules/transport/Listitem/listitem'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Ratings from '../../Components/servicemodules/transport/rating-mod/ratingm'

class transportproviderlist extends Component{
    state = {
        providers :[],
        error: false,
        vehicletype: 'car',
        price:10000,
    };


    Changehandler = (event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }
         componentDidMount () {
         //    fetch('http://localhost:5000/api/TransportServices')
         // .then(res => res.json())
         // .then(provider =>
         //
         //     this.setState({ providers:provider})
         //     // this.props.onFetchTransport(provider)
         //
         // )
         // .catch(error => {
         //
         //     this.setState({error: true});
         // });


        // console.log(this.props);
        this.props.onInitTransport();

    }

    // postSelectedHandler = (id) => {
    //
    //     this.setState({selectedPostId: id});
    //    // console.log(id)
    //
    //
    // }
    componentDidUpdate(){
        console.log(this.state.vehicletype);
        console.log(this.state.price);
    }

render() {

        let  provideritem = (
                <div>
                    {this.props.providers_array.map((provider) => {
                        return(

                                <Listitem
                                    post_index={provider.post_id}
                                    id={provider.id}
                                    name={provider.name}
                                    price={provider.pricePerDay}
                                    vtype={provider.vehicleType}
                                    brand={provider.brand}
                                    model={provider.model}
                                    district={provider.district}
                                    imgURL={provider.imgURL}

                                />



                        );
                    })}
                </div>
            );

        return (

                    <div>
                        <br/>
                        <div className="container viewp">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="row">

                                        <div className="col-sm-12">
                                            <div className="form-group">

                                            <select className="form-control tm-select "  name="vehicletype" value={this.state.vehicletype} onChange={this.Changehandler}>
                                                <option value="all">Vehicle Type</option>
                                                <option value="Car">Car</option>
                                                <option value="Van">Van</option>
                                                <option value="Suv">Suv</option>
                                                <option value="Bus">Bus</option>

                                            </select>
                                        </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group">

                                                <select className="form-control tm-select"  name="" >
                                                    <option value="all">Ratings</option>
                                                    <option value="5">5</option>
                                                    <option value="4">4</option>
                                                    <option value="3">3</option>
                                                    <option value="2">2</option>

                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group">

                                                <select className="form-control tm-select" name="price"   value={this.state.price} onChange={this.Changehandler} >
                                                    <option value="all">Price </option>
                                                    <option value="10000">up to 10000 </option>
                                                    <option value="10000">10000</option>
                                                    <option value="5000">5000</option>
                                                    <option value="2500">2500</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="col-sm-5">
                                    {provideritem}
                                </div>
                                <div className="col-sm-3">

                                </div>


                            </div>
                        </div>

            </div>

        );

    }
}



const mapStateToProps = state => {
    return {

        providers_array: state.transport_reducer.providers,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitTransport: () => dispatch(actions.initTransport()),

    }
};
export default  connect(mapStateToProps, mapDispatchToProps)(transportproviderlist);
