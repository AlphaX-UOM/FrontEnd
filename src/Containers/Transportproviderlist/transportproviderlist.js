import React,{Component, useEffect, useState }  from 'react';
import Listitem from '../../Components/servicemodules/transport/Listitem/listitem'

import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {useHistory} from 'react-router-dom'

class transportproviderlist extends Component{
    state = {
        providers :[],
        selectedPostId: null,
        error: false
    };



   async componentDidMount () {
        fetch('http://localhost:5000/TransportProvider/getall')
            .then(res => res.json())
            .then(provider =>
                this.setState({ providers:provider.data })

            )
            .catch(error => {

                this.setState({error: true});
            });




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

                        {provideritem}



            </div>

        );

    }
}

export default transportproviderlist;
