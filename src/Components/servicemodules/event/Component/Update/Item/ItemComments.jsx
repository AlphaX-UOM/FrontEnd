import React, { useEffect, useState } from "react";
import "./ItemComments.css";
import axios from "axios";

const Comments = (props) => {
  
    const [commentList, setCommentList] = useState();

    useEffect(() => {
        fetch(
            'https://alphax-api.azurewebsites.net/api/eventplannerservices/GetEventDetails/' +
            props.add_id
        )
            .then((res) => res.json())
            .then((data) => {
                setCommentList(data);
            });
    }, []);


    const commentListComponent = () => {
        console.log(commentList.eventPlannerServiceComments);
        return commentList.eventPlannerServiceComments.map((commentListObject) => {
          return (
            <div className="col-md-9">
                  <div className="media g-mb-30 media-comment">
                    <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                      <div className="g-mb-15">
                        <h5 className="h5 g-color-gray-dark-v1 mb-0 txtcolorx">
                          {commentListObject.user.firstName} {commentListObject.user.lastName}
                        </h5>

                        <span className="g-color-gray-dark-v4 g-font-size-12">
                          {commentListObject.createdAt}
                        </span>

                        <ul className="list-inline d-sm-flex my-0">
                          <li className="list-inline-item ml-auto"></li>
                        </ul>
                        <hr />
                      </div>

                      <p>
                        {commentListObject.content}
                      </p>

                      <hr className="" />

                      <ul className="list-inline d-sm-flex my-0">
                        <li className="list-inline-item g-mr-20">
                          <a
                            className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                            href="#!"
                          >
                            <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3 txtcolorx "></i>
                            178
                          </a>
                        </li>
                        <li className="list-inline-item g-mr-20">
                          <a
                            className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                            href="#!"
                          >
                            <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3 txtcolorx"></i>
                            34
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
          );
        });
      };


      if(commentList===undefined){
       return  <p>Loading....</p>
      }

  return (
    <div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <div className="media g-mb-30 media-comment">
                    <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                      <div className="g-mb-15">
                        <h5 className="h5 g-color-gray-dark-v1 mb-0 txtcolorx">
                          John Doe
                        </h5>

                        <span className="g-color-gray-dark-v4 g-font-size-12">
                          5 days ago
                        </span>

                        <ul className="list-inline d-sm-flex my-0">
                          <li className="list-inline-item ml-auto"></li>
                        </ul>

                        <hr />
                      </div>

                      <p>
                        Cras sit amet nibh libero, in gravida nulla . Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi
                      </p>

                      <hr className="" />

                      <ul className="list-inline d-sm-flex my-0">
                        <li className="list-inline-item g-mr-20">
                          <a
                            className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                            href="#!"
                          >
                            <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3 txtcolorx "></i>
                            178
                          </a>
                        </li>
                        <li className="list-inline-item g-mr-20">
                          <a
                            className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                            href="#!"
                          >
                            <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3 txtcolorx"></i>
                            34
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="media g-mb-30 media-comment">
                    <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                      <div className="g-mb-15">
                        <h5 className="h5 g-color-gray-dark-v1 mb-0 txtcolorx">
                          John Doe
                        </h5>

                        <span className="g-color-gray-dark-v4 g-font-size-12">
                          5 days ago
                        </span>

                        <ul className="list-inline d-sm-flex my-0">
                          <li className="list-inline-item ml-auto"></li>
                        </ul>
                        <hr />
                      </div>

                      <p>
                        Cras sit amet nibh libero, in gravida nulla . Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi
                      </p>

                      <hr className="" />

                      <ul className="list-inline d-sm-flex my-0">
                        <li className="list-inline-item g-mr-20">
                          <a
                            className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                            href="#!"
                          >
                            <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3 txtcolorx "></i>
                            178
                          </a>
                        </li>
                        <li className="list-inline-item g-mr-20">
                          <a
                            className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                            href="#!"
                          >
                            <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3 txtcolorx"></i>
                            34
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* another comment starts */}
                
                {commentListComponent()}
                {/* comment end here */}

              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Comments;
