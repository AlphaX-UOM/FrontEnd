
import { useDispatch, useSelector } from 'react-redux'
import { updateCart, removeFromCart } from './actions';
import Table from './Table';
import React, { Fragment, useEffect, useState } from 'react';


 const CartPage = () => {
    const items = useSelector(state => state.items);
    const [ subTotal, setSubTotal] = useState(0.00);
    const [ total, setTotal] = useState(0.00);
    const shipping = 10.00;
  
  
    useEffect(() => {
   
   
    }, [items, subTotal, total]) // Why useEfect -> Neu ko use it, react chua render first, da change state -> error
      return (
        <Fragment>
          <div className="container">
              <div className="row">
              <div className="col-sm cart">
                  <Table items={items}/>
              </div>
              <div className="col-sm-3 order-summary">
                  <ul className="list-group">
                  <li className="list-group-item">Order Summary</li>
  
                  <li className="list-group-item">
                      <ul className="list-group flex">
                        <li className="text-left">Subtotal</li>
                        <li className="text-right">${subTotal.toFixed(2)}</li>
                      </ul>
                      <ul className="list-group flex">
                        <li className="text-left">charges</li>
                        <li className="text-right">${shipping.toFixed(2)}</li>
                      </ul>
                      <ul className="list-group flex">
                        <li className="coupon crimson">
                            <small>Add Coupon Code</small>
                        </li>
                      </ul>
                  </li>
  
                  <li className="list-group-item ">
                      <ul className="list-group flex">
                      <li className="text-left">Total</li>
                      <li className="text-right">${subTotal === 0.00 ? "0.00" : total.toFixed(2)}</li>
                      </ul>
                  </li>
                  </ul>
                  
              </div>
              </div>
          </div>
        </Fragment>
      );
  }
  export default CartPage;