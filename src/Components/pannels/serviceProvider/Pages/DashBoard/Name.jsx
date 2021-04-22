

import React from 'react';
import { connect } from "react-redux";
import {InputLabel} from '@material-ui/core/';





function Name(props) {
   


    return (
        <div>
<InputLabel><h3>{props.userCred.firstName}   {props.userCred.lastName}</h3></InputLabel>
                

        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        reservations: state.eventpnl.reservations,
        formdata: state.eventpnl.formdata,
        total: state.eventpnl.total,
        userCred: state.eventpnl.userCred
    };
};


export default connect(mapStateToProps)(Name);

