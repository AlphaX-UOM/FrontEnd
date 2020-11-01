import React from "react";
import CheckoutCardList from './ChekoutCardList';

function payment(props) {
   
    return (
        <div>
            <CheckoutCardList data={props.location.data} />
        </div>
    );
}

export default payment;