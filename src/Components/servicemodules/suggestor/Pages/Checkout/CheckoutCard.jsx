import React from 'react';




function chekoutCard(props) {
    return(
      <li className="list-group-item shadow-lg"style={{ height:'130px' }}>
          <div className="row align-items-center">
              <div className="col-2">
                  <div style={{ width: '65px', height:'65px' }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyWmV7cmlqZ1bk0V_mDOevvOyiA3-pgYm78g&usqp=CAU" alt="cardipicture" class="img-fluid max-width: 100%; shadow-sm" /> 
                 </div>
              </div>
              <div className="col-10">
              <h6>Name: {props.name}</h6>
              <h9>Units : {props.units}</h9><br/>
              <h7>Total Price : {props.price}$</h7>
              </div>
          </div>
      </li>
    );
}

export default chekoutCard;