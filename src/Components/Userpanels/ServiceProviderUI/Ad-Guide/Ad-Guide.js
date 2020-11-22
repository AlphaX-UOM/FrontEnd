import React,{Component }  from 'react';


import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {useHistory} from 'react-router-dom'

class AdtGuide extends Component {
    state = {
        providers: [],
        selectedPostId: null,
        error: false
    };


    render() {


        return (

            <div>
                <h1>Guide</h1>

            </div>

        );

    }

}
export default AdtGuide;
