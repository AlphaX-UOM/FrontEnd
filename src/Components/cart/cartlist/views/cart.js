import './cart.css';
import { useDispatch, useSelector } from 'react-redux'
import { updateCart, removeFromCart } from '../../../../store/lib/actions'
import Table from './Table';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux'


 const CartPage = (props) => {
     const {items} = props;
     // const items = useSelector(state => state.items);
    const [ subTotal, setSubTotal] = useState(0.00);
    const [ total, setTotal] = useState(0.00);
    const shipping = 10.00;
  
  
    useEffect(() => {
      let totals = items.map(item => item.quantity * 1)
      setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0)) 
      setTotal(subTotal + shipping)
    }, [items, subTotal, total]) // Why useEfect -> Neu ko use it, react chua render first, da change state -> error
      return (
        <Fragment>
            <br/>
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
            <br/>
        </Fragment>
      );
  }
const mapStateToProps = (state) => {
    return {
        items: state.onlineStoreApp.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // saveLocalStorage:  items => { dispatch(saveCart(items)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( CartPage);

