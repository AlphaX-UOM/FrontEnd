import React from 'react';
import Modal from './Pages/Modal';
import { Link } from "react-router-dom";

 function Card(props) {
  const { item } = props;
  console.log(item);
  return (
    <div className="col-sm-9">
      <div className="card1">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
         
              <h4>{item.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>${item.price}/per person</p>
              <button
                className="btn btn-warning btn-sm"
                data-toggle="modal"
                data-target={`#${item.name}`}
              >
                 view Event
                
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <Modal item={item} />
      
      </div>
    </div>
  );
}
export default Card;