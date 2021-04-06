import React, { useEffect, useState } from "react";
import "./ItemComments.css";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Comment from "./ItemOneComment";
import { connect } from "react-redux";
import axios from "axios";
import { Card } from "react-bootstrap";

const Comments = (props) => {
  const [commentList, setCommentList] = useState();
 
  const [comment, setComment] = useState();
  const [ordered, setOrdered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(false);
  const [value, setValue] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const handleFormData = () => {
    // comment post request goes here
 
    let commentObject = {
      createdAt: new Date(),

      rating:value===total?total:value,
      content: comment,
      userID: props.userCred.id,
      eventPlannerServiceID: props.add_id,
    };

    axios
      .post(
        "https://alphax-api.azurewebsites.net/api/eventplannerservicecomments",
        commentObject
      )
      .then(function(response) {
        console.log(response);
        setLoading(true);
      });
  };

  const handleInputComment = (event) => {
    // setting the comment description
    setComment(event.target.value);
    console.log("comment -> " + event.target.value);
  };

  const handleInputRating = (event) => {
    // setting the rating value
    setValue(event.target.value);
    console.log("rating -> " + event.target.value);
  };

  useEffect(() => {
    fetch(
      "https://alphax-api.azurewebsites.net/api/eventplannerservices/GetEventDetails/" +
        props.add_id
    )
      .then((res) => res.json())
      .then((data) => {
        setCommentList(data);
        setLoading(false);
      });
  }, [loading]);

  useEffect(() => {
    fetch(
      "https://alphax-api.azurewebsites.net/api/eventplannerservicereservations"
    )
      .then((res) => res.json())
      .then((data) => {
        
        if (props.userCred.id !== undefined) {
          console.log("user -> "+props.userCred.id);
          data = data.filter( (item) => item.userID === props.userCred.id && item.eventPlannerServiceID === props.add_id );

          if (data[0] !== undefined) {
            setOrdered(true);
          } else {
            setOrdered(false);
          }
        }
      });
  }, []);
const [eventlist,setEventList]=useState(null);
useEffect(() => {
  fetch(
      `https://alphax-api.azurewebsites.net/api/eventplannerservicecomments` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
  )

      .then((response) => {
          return response.json();
      })
      .then((responseData) => {

          //  setEvent(responseData)
          responseData = responseData.filter(item => item.eventPlannerServiceID === props.add_id);
          responseData= responseData.filter((ele, ind) => ind === responseData.findIndex(elem => elem.userID === ele.userID))
          setEventList(responseData.reduce((total, pay) => total + 1, 0));
          setTotal(responseData.reduce((total,pay)=>total+pay.rating,0))
       



      });
}, [props.add_id]);


  const commentListComponent = () => {

    console.log(commentList.eventPlannerServiceComments);
     console.log("data=> "+eventlist)

    return commentList.eventPlannerServiceComments.map((commentListObject) => {
      return <Comment data={commentListObject} />;
    });
  };

  const commentInput = () => {


    return (
      <div className="col-md-9">
        <div className="media g-mb-30 media-comment">
          <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
            <div className="g-mb-15">
              <h5 className="h5 g-color-gray-dark-v1 mb-0 txtcolorx">
                {props.userCred.firstName} {props.userCred.lastName}
              </h5>

              <span className="g-color-gray-dark-v4 g-font-size-12">
                {new Date().toISOString().slice(0, 10)}
              </span>

              <ul className="list-inline d-sm-flex my-0">
                <li className="list-inline-item ml-auto"></li>
              </ul>
              <hr />
            </div>
             <TextField
                id="standard-basic"
                fullWidth
                label="Input your comment"
                onChange={handleInputComment}
              />
           
     
      

            <hr className="" />

            <ul className="list-inline d-sm-flex my-0">
              <li className="list-inline-item g-mr-20">

                {eventlist===0?
<Rating 
                name="pristine"
                value={value}
                onChange={handleInputRating}
              />:""
               
            }
  

      
              </li>
              <li className="list-inline-item g-mr-20"></li>
              <li className="list-inline-item g-mr-20"></li>
              <li className="list-inline-item g-mr-20"></li>
              <li className="list-inline-item g-mr-20">
                <button
                  type="button"
                  class="btn btn-outline-success"
                  onClick={handleFormData}
                >
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  if (commentList === undefined) {
    return <p>Loading....</p>;
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
                {props.userCred.id!==undefined && ordered ? commentInput()  : <p>login to comment</p> }
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userCred: state.eventpnl.userCred,
  };
};

export default connect(mapStateToProps)(Comments);
