
import React from 'react';
import Row from './Row';
import { connect } from 'react-redux'
import './cart.css';
const Table = ({items}) => {
    return (
      <table className="table table-striped table-hover">
        <tr>
          <th width="200">Service Name</th>
          <th width="150">Price Per Unit</th>
          <th width="150">No. of customers</th>
          <th width="200">Total price</th>
        </tr>
        {
            items.map((item, i) => <Row i={i} item={item}/>)
        }
      </table>
    );
}


export default (Table);
 