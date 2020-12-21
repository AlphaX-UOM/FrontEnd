




import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./actions";






 


  function Modal ({item})  {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
  const add = (item, quantity) => {
    dispatch(addToCart(item, quantity));
  };
  
  return (
    
    <div
    className="modal fade "
    id={item.name}
    data-backdrop="static"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            {item.name}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-sm">
              <p className="lead">
               {item.otherDetails}
              </p>
              <h3 className="price">${item.price}/price per person</h3> <br />
              <h6 className="price">Enter Number of Travellers</h6> <br />
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
                  type="button"
                  className="btn btn-secondary"
                >
                  -
                </button>
                <span className="btn btn-light qty">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  type="button"
                  className="btn btn-secondary"
                >
                  +
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
              onClick={() => add(item, qty)}
            >
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Modal;

  