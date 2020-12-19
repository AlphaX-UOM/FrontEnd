import React,{Component, useEffect, useState }  from 'react';
import Listitem from '../../Components/servicemodules/transport/Listitem/listitem'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


class transportproviderlist extends Component{
    state = {
        providers :[],
        error: false
    };



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


        console.log(this.props);
        this.props.onInitTransport();

    }

    // postSelectedHandler = (id) => {
    //
    //     this.setState({selectedPostId: id});
    //    // console.log(id)
    //
    //
    // }

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

                                />



                        );
                    })}
                </div>
            );

        return (

                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    One of three columns
                                </div>
                                <div className="col-sm-8">
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

        providers_array: state.transport_reducer.providers,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitTransport: () => dispatch(actions.initTransport()),

    }
};
export default  connect(mapStateToProps, mapDispatchToProps)(transportproviderlist);
