import React,{Component }  from 'react';


import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {useHistory} from 'react-router-dom'

class AdHotel extends Component {
    state = {
        providers: [],
        selectedPostId: null,
        error: false
    };


    render() {


        return (

            <div>
                <h1>hotel</h1>

            </div>

        );

    }

}
export default AdHotel;