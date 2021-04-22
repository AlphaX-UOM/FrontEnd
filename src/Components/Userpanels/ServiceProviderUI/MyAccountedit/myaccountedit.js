import React,{Component }  from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {useHistory} from 'react-router-dom'

class MyAccountedit extends Component {
    state = {
        providers: [],
        selectedPostId: null,
        error: false
    };


    render() {


        return (

            <div>
                <h1>MyAccountedit</h1>

            </div>

        );

    }

}
export default MyAccountedit;
