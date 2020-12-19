
import React from 'react';
import Row from './Row';

const Table = ({items}) => {
    return (
      <table>
        <tr>
          <th width="200">Event Name</th>
          <th width="150">Price per customer</th>
          <th width="150">Number of customers</th>
          <th width="200">Total price</th>
        </tr>
        {
          items.map((item, i) => <Row i={i} item={item}/>)
        }
      </table>
    );
}
export default Table;
 