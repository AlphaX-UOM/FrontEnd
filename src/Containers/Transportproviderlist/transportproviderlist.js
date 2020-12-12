import React,{Component, useEffect, useState }  from 'react';
import Listitem from '../../Components/servicemodules/transport/Listitem/listitem'
import axios from 'axios';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {useHistory} from 'react-router-dom'

class transportproviderlist extends Component{
    state = {
        providers :[],
        selectedPostId: null,
        error: false
    };



        async componentDidMount () {
            fetch('http://localhost:5000/api/TransportServices')
         .then(res => res.json())
         .then(provider =>

             this.setState({ providers:provider})

         )
         .catch(error => {

             this.setState({error: true});
         });





     // axios.get( 'http://localhost:5000/api/TransportServices' )
     //     .then( response => {
     //
     //         this.setState({providers: response});
     //
     //     } );


    }



    postSelectedHandler = (id) => {

        this.setState({selectedPostId: id});
       // console.log(id)


    }

    render() {
       // console.log(this.state);
         let  provideritem = (
                <div>
                    {this.state.providers.map((provider) => {
                        return(

                                <Listitem
                                    key={provider.id}
                                    id={provider.id}
                                    name={provider.name}
                                    price={provider.costPerDay}
                                    vtype={provider.typesOfVehicle}
                                    rating={provider.ratings}
                                    clicked={() => this.postSelectedHandler(provider.id)}
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

export default transportproviderlist;
