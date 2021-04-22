import React,{Component, useEffect, useState }  from 'react';
import Listitem from '../../Components/servicemodules/transport/Listitem/listitem'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Ratings from '../../Components/servicemodules/transport/rating-mod/ratingm'
import TransportFilters from '../../Components/servicemodules/transport/filters/transport_filters'
class transportproviderlist extends Component{

    state = {
        providers :[],
        error: false,
        price:10000,
    };


    Changehandler = (event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }
         componentDidMount () {
            fetch('https://alphax-api.azurewebsites.net/api/transportservices/Res?arrival='+this.props.pickup_date+'&&departure='+this.props.drop_date+'&&seats='+this.props.no_travellers)
         .then(res => res.json())
         .then(provider =>

             this.setState({ providers:provider})


         )
         .catch(error => {

             this.setState({error: true});
         });


        // console.log(this.props);
        // this.props.onInitTransport();
        //      this.setState({providers:this.props.providers_array});

    }

    // postSelectedHandler = (id) => {
    //
    //     this.setState({selectedPostId: id});
    //    // console.log(id)
    //
    //
    // }
    componentDidUpdate(){
        console.log(this.props.price_per_distance_filter_03);

    }



render() {
  const  filterEvents = this.state.providers.filter(item=>{
        if(this.props.vehicle_type_fil===null||this.props.vehicle_type_fil==="All")
            return this.state.providers;
        else if(this.props.vehicle_type_fil==="Car")
            return item.vehicleType==="Car"
        else if(this.props.vehicle_type_filter==="Van")
            return item.vehicleType==="Van"
        else if(this.props.vehicle_type_filter==="Suv")
            return item.vehicleType==="Suv"
        else if(this.props.vehicle_type_filter==="Bus")
            return item.vehicleType==="Bus"
        else
            return item.vehicleType.includes(this.props.vehicle_type_fil)

    })
    const  filterEvents_02 = filterEvents.filter(item=>{
        if(this.props.price_per_day_filter_02===null||this.props.price_per_day_filter_02==="All")
            return filterEvents;
         if(this.props.price_per_day_filter_02===">10000")
            return item.pricePerDay >=10000
        if(this.props.price_per_day_filter_02==="10000")
            return item.pricePerDay < 10000
         if(this.props.price_per_day_filter_02==="5000")
             return item.pricePerDay<5000
         if(this.props.price_per_day_filter_02==="2500")
             return item.pricePerDay<2500


    })
    const  filterEvents_03 = filterEvents_02.filter(item=>{
        if(this.props.price_per_distance_filter_03===null||this.props.price_per_distance_filter_03==="All")
            return filterEvents_02;
        if(this.props.price_per_distance_filter_03===">100")
            return item.pricePer1KM >=100
        if(this.props.price_per_distance_filter_03==="100")
            return item.pricePer1KM < 100
        if(this.props.price_per_distance_filter_03==="50")
            return item.pricePer1KM < 50
        if(this.props.price_per_distance_filter_03==="25")
            return item.pricePer1KM < 25


    })
        let  provideritem = (
                <div>
                    {filterEvents_03.map((provider) => {
                        return(

                                <Listitem
                                    key={provider.id}
                                    id={provider.id}
                                    name={provider.name}
                                    pricePerDay={provider.pricePerDay}
                                    pricePer1KM={provider.pricePer1KM}
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

                        <div className="container viewp border border-light">
                            <div className="row">
                                <div className="col-sm-1">

                                </div>
                                <div className="col-sm-4">
                                    <div className="row">


                                        <TransportFilters/>



                                    </div>


                                </div>

                                <div className="col-sm-6">
                                    {provideritem}
                                </div>



                            </div>
                        </div>

            </div>

        );

    }
}



const mapStateToProps = state => {
    return {

        vehicle_type_fil: state.transport_reducer.vehicle_type_filter,
        price_per_day_filter_02: state.transport_reducer.price_per_day_filter_02,
        price_per_distance_filter_03: state.transport_reducer.price_per_distance_filter_03,
        no_travellers: state.transport_input_reducer.form_no_travellers,
        pickup_date:state.transport_input_reducer.form_pickup_date,
        drop_date:state.transport_input_reducer.form_drop_date,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitTransport: () => dispatch(actions.initTransport()),

    }
};
export default  connect(mapStateToProps, mapDispatchToProps)(transportproviderlist);
