

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
  console.log(props.item)
  const { id, quantity, details, no_travellers, date, checkin, checkout, type, days } = props.item
  const item = details
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch()
  const update = (id, quantity) => {
    dispatch(updateCart(id, quantity))
  }
  /* Prolems: Tai sao khi click, qty + 1 -> qua line update, qty ko update -> thieu 1 khi tinh so luong */
  const remove = (item) => {
    dispatch(removeFromCart(item))
  }

  useEffect(() => {
    // console.log(qty)
    update(id, qty)
  }, [qty])

console.log("typeeee->"+type);

  if (type === 'TransportService') {
    return (
      <tr>
        <td>{date}</td>
        <td className="font-weight-bold">{item}</td>
        <td>{type}</td>
        <td>{qty}$/day</td>
        <td>
          {no_travellers}

        </td>
        <td>${(qty * days).toFixed(2)}</td>
        <td>
          <CancelIcon style={{ color: green[500] }} fontSize="large" onClick={() => { remove(props.item) }}></CancelIcon>
        </td>
      </tr>
    );


  }

  else if (type === 'GuideService') {
    return (
      <tr>
        <td>{date}</td>
        <td className="font-weight-bold">{item}</td>
        <td>{type}</td>
        <td>{qty}$/day</td>
        <td>
          {no_travellers}

        </td>
        <td>${(qty * days).toFixed(2)}</td>
        <td>
          <CancelIcon style={{ color: green[500] }} fontSize="large" onClick={() => { remove(props.item) }}></CancelIcon>
        </td>
      </tr>
    );
  }

  else if (type === 'EventService') {
    return (
      <tr>
        <td>{date}</td>
        <td className="font-weight-bold">{item}</td>
        <td>{type}</td>
        <td>{qty}$</td>
        <td>
          {no_travellers}

        </td>
        <td>${(qty * no_travellers).toFixed(2)}</td>
        <td>
          <CancelIcon style={{ color: green[500] }} fontSize="large" onClick={() => { remove(props.item) }}></CancelIcon>
        </td>
      </tr>
    );
  }

  else if (type === 'HotelService') {
    return (
      <tr>
        <td>{date}</td>
        <td className="font-weight-bold">{item}</td>
        <td>{type}<small>*normal room</small></td>
        <td>{qty}$/day<small>(max 3 guests)</small></td>
        <td>
          {no_travellers}

        </td>
        {Math.round(no_travellers / 3) > 0 ? <td>${(qty * Math.round(no_travellers / 3)).toFixed(2)}</td> : <td>${(qty * 1).toFixed(2)}</td>}
        <td>
          <CancelIcon style={{ color: green[500] }} fontSize="large" onClick={() => { remove(props.item) }}></CancelIcon>
        </td>
      </tr>
    );
  }

  else {

    return (
      <tr>
        <td>{date}</td>
        <td className="font-weight-bold">{item}</td>
        <td></td>
        <td>${qty}</td>
        <td>
          {no_travellers}

        </td>
        <td>${(qty * 1).toFixed(2)}</td>
        <td>
          <CancelIcon style={{ color: green[500] }} fontSize="large" onClick={() => { remove(props.item) }}></CancelIcon>
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
}
export default Row;