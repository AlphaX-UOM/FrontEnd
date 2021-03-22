

import { useDispatch, useSelector } from 'react-redux'
import { updateCart, removeFromCart } from '../../../../store/lib/actions'
import { Link } from "react-router-dom";
import React, { Fragment, useEffect, useState } from 'react';
import './cart.css';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const Row = (props) => {
     // console.log(props.item)
    const { id, details,unit_price, no_travellers,Current_date,type,total_price,units,checkin_date,checkin_time,checkin_location,checkout_date,checkout_time,checkout_location } = props.item
    const item = details
    const [ qty, setQty ] = useState(unit_price);
    const dispatch = useDispatch()
    const update = (id, unit_price) => {
      dispatch(updateCart(id, unit_price))
    }
  /* Prolems: Tai sao khi click, qty + 1 -> qua line update, qty ko update -> thieu 1 khi tinh so luong */
    const remove = (item) => {
      dispatch(removeFromCart(item))
    }
  
    useEffect(() => {
      // console.log(qty)
      update(id, qty)
    }, [qty])
  
      return (
        <tr>
         <td>{Current_date}</td>
          <td className="font-weight-bold">{item}</td>
            <td>{type}</td>
            <td>
                {no_travellers}

            </td>

          <td>{qty}</td>
            <td>{units}</td>

            {/*<td>${ (qty * 1).toFixed(2) }</td>*/}
            <td>{ total_price }</td>
          <td>
              <CancelIcon  style={{ color: green[500] }} fontSize="large" onClick={() => {remove(props.item)}}></CancelIcon>
              {/*<CancelOutlinedIcon>aa</CancelOutlinedIcon>*/}
            {/*<button*/}
              {/*type="button"*/}
              {/*className="btn btn-danger remove"*/}
              {/*onClick={() => { remove(props.item) }}*/}
            {/*>*/}
              {/*X*/}
            {/*</button>*/}
          </td>
        </tr>
      );
  }
  export default Row;