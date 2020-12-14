import React, { useState, useEffect } from "react";
import CheckoutCard from "./CheckoutCard";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function CheckoutCardList(props) {
  let [cart, setCart] = useState([]);
  console.log("cart-> " + props.reservations);

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
      existingItem.units += item.units; //update item
    } else {
      //if item doesn't exist, simply add it
      cartCopy.push(item);
    }

    //update app state
    setCart(cartCopy);

    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const editItem = (id, units) => {
    let cartCopy = [...cart];

    //find if item exists, just in case
    let existentItem = cartCopy.find((item) => item.id == id);

    //if it doesnt exist simply return
    if (!existentItem) return;

    //continue and update quantity
    existentItem.units += units;

    //validate result
    if (existentItem.units <= 0) {
      //remove item  by filtering it from cart array
      cartCopy = cartCopy.filter((item) => item.id != id);
    }

    //again, update state and localState
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  const removeItem = (id) => {
    //create cartCopy
    let cartCopy = [...cart];

    cartCopy = cartCopy.filter((item) => item.id != id);

    //update state and local
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  //this is called on component mount
  useEffect(() => {
    //turn it into js
    localCart = JSON.parse(localCart);
    //load persisted cart into state if it exists
    if (localCart) setCart(localCart);
    
  }, []); //the empty array ensures useEffect only runs once



  const nameListComponent = () => {
    return cart.map((aReserve) => {
      return (
        <CheckoutCard
          key={aReserve.id}
          name={aReserve.name}
          price={aReserve.price}
          condition={aReserve.condition}
          units={aReserve.units}
          unitTotal={aReserve.unitTotal}
        />
      );
    });
  };

  const handleFormData = () => {
    props.addTotalData(total);


  };

  return (
    <React.Fragment>
      <div className="container-fluid" style={{ height: "1000px" }}>
        <div className="row">
          <div className="col-7">
            <div className="container mt-4">
              <ul className="list-group"> {nameListComponent()} </ul>
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
              <Link to="/paypal">
                <button class="btn btn-warning" onClick={handleFormData}>Proceed to Checkout</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    reservations: state.reservations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      addTotalData: (total) => { dispatch({type: 'ADD_PAYPAL_DATA', total: total} )}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCardList);
