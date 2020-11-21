import React,{Component }  from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {useHistory} from 'react-router-dom'
import Menubar from "../Menubar/CenteredTabs";

import Adtransport from "../Ad-Trasnport/Ad-Transport-list/Adtransportlist";
import Adguide from "../Ad-Guide/Ad-Guide";
import AdHotel from "../Ad-Hotel/adhotel";
import AdEvent from "../Ad-Event/adevent";

class MyAccountsp extends Component {
    state = {
        providers: [],
        selectedPostId: null,
        error: false
    };


    render() {


        return (

            <div>
                <Menubar/>
                <switch>
                    <Route path={this.props.match.url+"/adtransport"} component={Adtransport}/>
                    <Route path={this.props.match.url+"/adguide"} component={Adguide}/>
                    <Route path={this.props.match.url+"/adhotel"} component={AdHotel}/>
                    <Route path={this.props.match.url+"/adevent"} component={AdEvent}/>
                </switch>
            </div>

        );

    }

}
export default MyAccountsp;
