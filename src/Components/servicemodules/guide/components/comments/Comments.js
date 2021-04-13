import React, {useEffect, useState} from "react";
import "./comments.css";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

import {connect} from "react-redux";
import axios from "axios";

const Comments = (props) => {

    const [state,setState]=useState()
  


 
    useEffect(() => {
      fetch(
        'https://alphax-api.azurewebsites.net/api/tourGuideServiceComments' 
         
      )
        .then((res) => res.json())
        .then((data) => {
          setState(data);
        });
    }, []);
  
  console.log("wewant this",props.id)
    const [commentList, setCommentList] = useState();
    const [value, setValue] = React.useState(2);
    const [comment, setComment] = useState();
    const [avgrate, setAvgrate] = useState();
    const [ordered, setOrdered] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFormData = () => {
        if (props.userCred.id !== undefined && true) {
            let commentObject = {
                createdAt: new Date(),
                rating: value,
                content: comment,
                userID: props.userCred.id,
                tourGuideServiceID: props.id,
            };

            axios
                .post(
                    "https://alphax-api.azurewebsites.net/api/tourGuideServiceComments",
                    commentObject
                )
                .then(function (response) {
                    // console.log(response);
                    setLoading(true);
                    setComment('');
                   
                    

                });

        } else {
            alert('Sign in first');
            console.log(avgrate)
        }
        // comment post request goes here
        state &&
                    state
                      .filter((word) => word.tourGuideServiceID === props.id)
                      .map((Aname, i) => {
                        return (
                          <ShowComments
                            key={i}
                            userID={Aname.userID}
                            createdat={Aname.createdAt}
                            content={Aname.content}
                            
                           
                          />
                        );
                      })
        console.log(avgrate)
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
            "https://alphax-api.azurewebsites.net/api/TourGuideServices/GetTourGuideDetails" +
            props.id
        )
            .then((res) => res.json())
            .then((data) => {
                setCommentList(data);
                setLoading(false);
                let avgrating = 0;
                let comnum = 1;
                //Start the timer
                     console.log(data);
                    // commentList.transportServiceComments.map((commentListObject) => {
                    //     avgrating = avgrating + commentListObject.rating;
                    //     comnum++;
                    // })
                    for ( let key in data ) {
                         // avgrating = avgrating + data.transportServiceComments[key];
                        comnum++;
                    }

                    setAvgrate(avgrating / comnum);



            })
            console.log(props.userCred);
    }, [loading]);


    useEffect(() => {
        fetch(
            "https://alphax-api.azurewebsites.net/api/tourguideservicereservations"
        )
            .then((res) => res.json())
            .then((data) => {

                if (props.userCred.id !== undefined) {
                    console.log("user -> " + props.userCred.id);
                    data = data.filter((item) => item.userID === props.userCred.id && item.tourGuideServiceID === props.id);

                    if (data[0] !== undefined) {
                        setOrdered(true);
                    } else {
                        setOrdered(false);
                    }
                }
            });
    }, []);

   


    console.log(commentList);

    const commentInput = () => {
        return (
            <div className="col-md-9">
                <div className="media g-mb-30 media-comment">
                    <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                        <div className="g-mb-15">
                            <h5 className="h5 g-color-gray-dark-v1 mb-0 txtcolorx">
                                {props.userCred.name} 
                            </h5>

                            <span className="g-color-gray-dark-v4 g-font-size-12">
                {new Date().toISOString().slice(0, 10)}
              </span>

                            <ul className="list-inline d-sm-flex my-0">
                                <li className="list-inline-item ml-auto"></li>
                            </ul>
                            <hr/>
                        </div>

                        <TextField
                            id="standard-basic"
                            fullWidth
                            label="Input your comment"
                            maxlength="100"
                            value={comment}
                            onChange={handleInputComment}
                        />

                        <hr className=""/>

                        <ul className="list-inline d-sm-flex my-0">
                            <li className="list-inline-item g-mr-20">
                              
                            </li>
                            <li className="list-inline-item g-mr-20"></li>
                            <li className="list-inline-item g-mr-20"></li>
                            <li className="list-inline-item g-mr-20"></li>
                            <li className="list-inline-item g-mr-20">
                                <button
                                    type="button"
                                    class="btn btn-outline-success"
                                    onClick={handleFormData }
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
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <div className="container">
                            <div className="row">


                                {/* another comment starts */}
                                {/*{props.userCred.id!==undefined && ordered ?  : <p>login to comment</p> }*/}
                              
                                {
     
     state &&
      state
        .filter((word) => word.tourGuideServiceID === props.id)
        .map((Aname, i) => {
          return (
            <ShowComments
              key={i}
              userID={Aname.userID}
              createdat={Aname.createdAt}
              content={Aname.content}
              
             
            />
          );
        })
    }
      {commentInput()}
                            

                                {/* comment end here */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userCred: state.eventpnl.userCred,
    };
};

export default connect(mapStateToProps)(Comments);
const ShowComments=(props)=>{

    const[user,setUser]=useState([])
  
    useEffect(() => {
      fetch(
        `https://alphax-api.azurewebsites.net/api/users/${props.userID}` 
         
      )
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }, []);
  
  
  
  let name1;
   console.log("id1",props.userID)
   
      console.log(user.firstName)
      
  
  
    return (
      <div className="col-md-9">
      <div className="media g-mb-30 media-comment">
  
              <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                  <div className="g-mb-15">
                      <h5 className="h5 g-color-gray-dark-v1 mb-0 txtcolorx">{user.firstName+" "+user.lastName}</h5>
  
                      <span
                          className="g-color-gray-dark-v4 g-font-size-12">{props.createdat}</span>
  
                      <ul className="list-inline d-sm-flex my-0">
                      <li className="list-inline-item ml-auto">
  
                         
                      </li>
                          </ul>
  
  
                      <hr/>
                  </div>
  
                  <p>{props.content}
                      </p>
  
                  <hr className=""/>
  
                  <ul className="list-inline d-sm-flex my-0">
                      <li className="list-inline-item g-mr-20">
                          <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                             href="#!">
                              <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3 txtcolorx "></i>
                              178
                          </a>
                      </li>
                      <li className="list-inline-item g-mr-20">
                          <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                             href="#!">
                              <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3 txtcolorx"></i>
                              34
                          </a>
                      </li>
  
                  </ul>
              </div>
      </div>
  </div>
    )
  }
  