
import React from "react";

function ItemOneComment(props) {

  return (
    <div className="col-md-9">
   <p></p>
      <div className="media g-mb-30 media-comment">
        <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
          <div className="g-mb-15">
            <h5 className="h5 g-color-gray-dark-v1 mb-0 txtcolorx">
              {props.firstName}{" "}
              {props.lastName}
            </h5>

            <span className="g-color-gray-dark-v4 g-font-size-12">
              {new Date(props.createdAt)
                .toISOString()
                .slice(0, 10)}
            </span>
            <ul className="list-inline d-sm-flex my-0">
              <li className="list-inline-item ml-auto"></li>
            </ul>
            <hr />
          </div>
          <p>{props.content}</p>
          <hr className="" />
        </div>
      </div>
    </div>
  );
}



export default ItemOneComment;