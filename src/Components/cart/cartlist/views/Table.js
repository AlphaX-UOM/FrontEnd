
import React from 'react';
import Row from './Row';
import { connect } from 'react-redux'
import './cart.css';
const Table = ({items}) => {
    return (
      <table className="table table-striped ">
          <thead className="thead-light">
        <tr >
            <th scope="col" width="120">Date</th>
          <th scope="col" width="150">Service</th>
            <th scope="col" width="150">Type</th>

          <th width="150">No.Customers</th>
            <th width="150">Price P. Unit(LKR)</th>
            <th width="150">No.Units</th>
          <th width="150">Total price(LKR)</th>
        </tr>
          </thead>
        {
            items.map((item, i) => <Row i={i} item={item}/>)
        }
      </table>
    );
}


export default (Table);
 