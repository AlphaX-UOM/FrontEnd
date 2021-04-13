
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import React, { useEffect, useState } from "react";

function ItemOneComment(props) {
  const [showText, setShowText] = useState(false);
  const [users, setUsers] = useState([]);
var userId=props.data.userID;

  useEffect(() => {
    fetch(
        `https://alphax-api.azurewebsites.net/api/users/${userId}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
    )

        .then((response) => {
            return response.json();
        })
        .then((responseData) => {

            //  setEvent(responseData)

            setUsers(responseData);
            console.log(responseData)
         

        });
}, []);

console.log("my Id: "+props.data.userID)
  return (
    <div className="col-md-9">
   <p></p>
      <div className="media g-mb-30 media-comment">
        <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
          <div className="g-mb-15">
            <h5 className="h5 g-color-gray-dark-v1 mb-0 txtcolorx">
              {users.firstName}{" "}
              {users.lastName}
            </h5>

            <span className="g-color-gray-dark-v4 g-font-size-12">
              {new Date(props.data.createdAt)
                .toISOString()
                .slice(0, 10)}
            </span>

            <ul className="list-inline d-sm-flex my-0">
              <li className="list-inline-item ml-auto"></li>
            </ul>
            <hr />
          </div>

          <p>{props.data.content}</p>

          <hr className="" />
          {/* {props.data.rating===0?"":
          <Rating
            name="read-only"
            value={props.data.rating}
            readOnly
          />} */}

        </div>
      </div>
    </div>
  );
}



export default ItemOneComment;