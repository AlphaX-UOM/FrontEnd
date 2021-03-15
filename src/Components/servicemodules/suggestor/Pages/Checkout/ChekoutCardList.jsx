import React, { useState, useEffect } from "react";
import CheckoutCard from "./CheckoutCard";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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

function CheckoutCardList(props) {

  const [cart, setCart] = useState(props.reservations);
  console.log("now cart item reservation prop-> " + props.reservations[0].name);
  console.log("now cart item cart-> " + cart[0].name);

  let localCart = localStorage.getItem("cart");

  let value = cart.reduce(function (prev, cur) {
    return prev + cur.unitTotal;
  }, 0);

  let total = value + 20;

  const addItem = (item) => {
    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = [...cart];

    //assuming we have an ID field in our item
    let { id } = item;

    //look for item in cart array
    let existingItem = cartCopy.find((cartItem) => cartItem.id == id);

    //if item already exists
    if (existingItem) {
      // existingItem.units += item.units; //update item
    } else {
      //if item doesn't exist, simply add it
      cartCopy.push(item);
    }

    //update app state
    // setCart(cartCopy);

    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  // const editItem = (id, units) => {
  //   let cartCopy = [...cart];

  //   //find if item exists, just in case
  //   let existentItem = cartCopy.find((item) => item.id == id);

  //   //if it doesnt exist simply return
  //   if (!existentItem) return;

  //   //continue and update quantity
  //   existentItem.units += units;

  //   //validate result
  //   if (existentItem.units <= 0) {
  //     //remove item  by filtering it from cart array
  //     cartCopy = cartCopy.filter((item) => item.id != id);
  //   }

  //   //again, update state and localState
  //   setCart(cartCopy);

  //   let cartString = JSON.stringify(cartCopy);
  //   localStorage.setItem("cart", cartString);
  // };

  // const removeItem = (id) => {
  //   //create cartCopy
  //   let cartCopy = [...cart];

  //   cartCopy = cartCopy.filter((item) => item.id != id);

  //   //update state and local
  //   setCart(cartCopy);

  //   let cartString = JSON.stringify(cartCopy);
  //   localStorage.setItem("cart", cartString);
  // };

  //this is called on component mount
  useEffect(() => {
    //turn it into js
    localCart = JSON.parse(localCart);
    //load persisted cart into state if it exists
    if (localCart) setCart(localCart);
  }, []); //the empty array ensures useEffect only runs once


//if coming from event
// useEffect(() => {
  
//   if (props.type) setCart(localCart);
// }, []);



  const productIncreaseHandler = index => {
    let products = [...cart];
    let quantity = products[index].units + 1;
    let sum = products[index].unitTotal + products[index].price;
    
      products[index] = { ...products[index], units: quantity, unitTotal: sum };
      setCart(products);

      localStorage.removeItem("cart") ;
      cart.map((item) => {
        addItem(item);
      });
    
  };

  const productDecreaseHandler = index => {
    let products = [...cart];
    let quantity = products[index].units - 1;
    let sum = products[index].unitTotal - products[index].price;

    if (quantity >= 1) {
      products[index] = { ...products[index], units: quantity, unitTotal: sum };
      setCart(products);
    } else {
      window.alert("Quantity must be at least one.");
    }

    localStorage.removeItem("cart") ;
      cart.map((item) => {
        addItem(item);
      });
  };

  const setDeletedItemsHandler = id => {
    let objects = [...cart];
    objects = objects.filter(e => {
      if (e.id) {
        if (e.id === id) {
          console.log(e.id);
        } else {
          return true;
        }
      }
    });
    setCart(objects);

    localStorage.removeItem("cart") ;
      cart.map((item) => {
        addItem(item);
      });
  };




  const nameListComponent = () => {
    return cart.map((aReserve, index) => {
      return (
        <CheckoutCard
          key={aReserve.id}
          name={aReserve.name}
          price={aReserve.price}
          units={aReserve.units}
          unitTotal={aReserve.unitTotal}
          increaseQuantity={() => productIncreaseHandler(index)}
          decreaseQuantity={() => productDecreaseHandler(index)}
          deleteItem={() => setDeletedItemsHandler(aReserve.id)}
        />
      );
    });
  };

  let history = useHistory();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

 

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormData = () => {
    props.addTotalData(total);
    props.addResData(cart);
    
    if(props.userCred.id !== undefined){
      history.push("/paypal");
    }
    else{
      setOpen(true);
    }
  };


  return (
    <React.Fragment>
      <div className="container-fluid" style={{ height: "1000px" }}>
        <div className="row">
          <div className="col-7">
            <div className="container mt-4">
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Unit Price</TableCell>
                      <TableCell align="right">Units</TableCell>
                      <TableCell align="right">Total</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {nameListComponent()}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <div className="col-5">
            <Card style={{ width: "18rem" }}>
              <Card.Header className="text-center">Checkout</Card.Header>
              <div className="container">
                <div className="row">
                  <div className="col-8">Cart -:</div>
                  <div className="col-4">{value}$</div>
                </div>
                <div className="row">
                  <div className="col-8">Charges -:</div>
                  <div className="col-4">20$</div>
                </div>
                <div className="row">
                  <div className="col-8">Total -:</div>
                  <div className="col-4">
                    <hr />
                    {total}$
                    <hr />
                  </div>
                </div>
              </div>
            </Card>
            <br />
            {/* <CreditCard /> */}
            <p>
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {/* <Link to="/paypal"> */}
                <button class="btn btn-warning" onClick={handleFormData}>
                  Proceed to Checkout
                </button>
              {/* </Link> */}
            </p>
          </div>
        </div>
      </div>
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
            <h2 id="transition-modal-title">Dear Customer!</h2>
            <p id="transition-modal-description">Please Login or Register to continue.</p>
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    reservations: state.eventpnl.reservations,
    userCred: state.eventpnl.userCred
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTotalData: (total) => {
      dispatch({ type: "ADD_PAYPAL_DATA", total: total });
    },
    addResData: (reservations) => {
      dispatch({ type: "ADD_RESERVATIONS", reservations: reservations });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCardList);
