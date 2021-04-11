import './cart.css';
import { useDispatch, useSelector } from 'react-redux'
import { updateCart, removeFromCart } from '../../../../store/lib/actions'
import Table from './Table';
import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { saveCart } from '../../../../store/lib/actions'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

 const CartPage = (props) => {

  console.log(props.items);
   let history = useHistory();

     const {items, saveLocalStorage } = props;
     // const items = useSelector(state => state.items);
    const [ subTotal, setSubTotal] = useState(0.00);
    const [ total, setTotal] = useState(0.00);



  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

 

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormData = () => {
    props.addTotalData(subTotal);
    
    if(props.isAuthenticated){

      fetch(`https://alphax-api.azurewebsites.net/api/users/${props.auth.userId}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {

        props.addUserData(responseData);
        history.push("/paypal");
      });

    }
    else{
      setOpen(true);
    }
  };
  
    useEffect(() => {

      let totals = items.map(item => item.total_price * 1)
      setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0)) 
      setTotal(subTotal)
        saveLocalStorage(items);
    }, [items, subTotal, total]) 
      return (
        <Fragment>
            <br/>
          <div className="container-fluid">
              <div className="row">
              <div className="col-sm cart">
                  <Table items={items} />
              </div>
              <div className="col-sm-3 order-summary">
                  <ul className="list-group">
                  <li className="list-group-item"><p className="font-weight-bold">Order Summary</p></li>
  
                  <li className="list-group-item">
                      <ul className="list-group flex">
                        <li className="text-left"><p className="font-weight-bold">Subtotal</p></li>
                        <li className="text-right">${subTotal.toFixed(2)}</li>
                      </ul>
                      {/*<ul className="list-group flex">*/}
                        {/*<li className="text-left">charges</li>*/}
                        {/*<li className="text-right">${shipping.toFixed(2)}</li>*/}
                      {/*</ul>*/}
                      {/*<ul className="list-group flex">*/}
                        {/*<li className="coupon crimson">*/}
                            {/*<small>Add Coupon Code</small>*/}
                        {/*</li>*/}
                      {/*</ul>*/}
                  </li>
  
                  <li className="list-group-item ">
                      <ul className="list-group flex">
                      <li className="text-left"><p className="font-weight-bold">Total</p></li>
                      <li className="text-right">${subTotal === 0.00 ? "0.00" : total.toFixed(2)}</li>
                      </ul>
                  </li>
                  </ul>
                  <br/>
                  <br/>
                  <p><center><button class="btn btn-warning" onClick={handleFormData}>
                  Proceed to Checkout
                </button>
                  </center>
                  </p>    
              </div>
              </div>
          </div>
            <br/>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Not signed in!</h2>
            <p id="transition-modal-description"><Link to="/login">Click</Link> here to login</p>
          </div>
        </Fade>
      </Modal>
        </Fragment>
      );
  }
const mapStateToProps = (state) => {
    return {
        items: state.onlineStoreApp.items,
        userCred: state.eventpnl.userCred,
        isAuthenticated: state.auth.token !== null,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveLocalStorage:  items => { dispatch(saveCart(items)) },
        addTotalData: (total) => {
          dispatch({ type: "ADD_PAYPAL_DATA", total: total });
        },
        addUserData: (userCred) => {
          dispatch({ type: "ADD_USER", userCred: userCred });
    }}
}

export default connect(mapStateToProps, mapDispatchToProps)( CartPage);

