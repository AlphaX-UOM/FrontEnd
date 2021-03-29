

import { useDispatch, useSelector } from 'react-redux';
import { updateCart, removeFromCart } from './actions';
import { Link } from "react-router-dom";
import React, { Fragment, useEffect, useState } from 'react';


const Row = (props) => {
    // console.log(props)
    const { id, quantity, details } = props.item
    const item = details
    const [ qty, setQty ] = useState(quantity);
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
  
      return (
        <tr>
         
          <td>{item.name}</td>
          <td>${item.price}</td>
          <td>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  if (qty > 1) {
                    setQty(qty - 1)
                    // update(id, quantity - 1)
                  }
                }}  
              >
                -
              </button>
                <span className="btn btn-light">{qty}</span>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setQty(qty + 1)
                  // update(id, quantity + 1)
                }}
              >
                +
              </button>
            </div>
          </td>
            <td>${ (quantity * item.price).toFixed(2) }</td>
          <td>
            <button
              type="button"
              className="btn btn-danger remove"
              onClick={() => { remove(props.item) }}
            >
              X
            </button>
          </td>
        </tr>
      );
  }
  export default Row;