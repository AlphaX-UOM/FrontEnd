import React, { useEffect, useState } from "react";
import './comments.css';
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Comment from "./ItemOneComment";
import { connect } from "react-redux";
import axios from "axios";
import { Card } from "react-bootstrap";

const Comments = (props) => {



    const [users, setUsers] = useState([]);
    const [commentList, setCommentList] = useState();
    const [ordered, setOrdered] = useState(false);
    const [rating, setRating] = useState();
    const [eventlist,setEventList]=useState(null);
    const [comment, setComment] = useState('');

    const [loading, setLoading] = useState(false);
    const[ratingApi,setRatingApi]=useState([]);
    const [total, setTotal] = useState(false);
    const [value, setValue] = useState(0);
    const [disabled, setDisabled] = useState(true);

    var userId=props.userid;
// console.log(userId)

    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/users/${userId}` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                setUsers(responseData);
                console.log(responseData)
            });
    }, []);


    useEffect(() => {
        fetch(
            "https://alphax-api.azurewebsites.net/api/transportservices/GetTransportDetails/" +
            props.add_id
        )
            .then((res) => res.json())
            .then((data) => {
                setCommentList(data);
                // console.log(data)
                setLoading(false);
            });
    }, [loading]);


    useEffect(() => {
        fetch(
            "https://alphax-api.azurewebsites.net/api/transportServiceReservations"
        ).then(
            (res) => res.json()
        ).then(
            (data) => {

                if (userId!== undefined) {
                     // console.log("user -> "+props.userid);
                    data = data.filter( (item) => item.userID === userId && item.transportServiceID === props.add_id );

                    if (data[0] !== undefined) {
                        setOrdered(true);
                    } else {
                        setOrdered(false);
                    }
                }
            });
    }, []);
// console.log(ordered)

    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/transportServiceComments` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)
                responseData = responseData.filter(item => item.transportServiceID === props.add_id);
                responseData= responseData.filter((ele, ind) => ind === responseData.findIndex(elem => elem.userID === ele.userID))
                setEventList(responseData.reduce((total, pay) => total + 1, 0));
                setTotal(responseData.reduce((total,pay)=>total+pay.rating,0))

            });
    }, [props.add_id]);

    useEffect(() => {
        fetch('https://alphax-api.azurewebsites.net/api/transportServiceRatings')
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                //   if(mapdata!=null){
                //     responseData = responseData.filter(item => item.district === props.eventmapCompare[mapdata]);
                responseData = responseData.filter(item => item.transportServiceID === props.add_id && item.userID === props.userid);
                if(responseData[0]!==undefined){
                    setRatingApi(responseData[0]);
                    setRating(responseData.reduce((total, pay) => total + 1, 0));
                    console.log(ratingApi)

                }

            });
    }, []);





    const handleFormData = () => {
        // comment post request goes here

        let commentObject = {
            createdAt: new Date(),
            content: comment,
            userID: userId,
            transportServiceID: props.add_id,
        };

        axios.post(
                "https://alphax-api.azurewebsites.net/api/transportServiceComments",
                commentObject
            ).then(function(response) {
                console.log(response);
                setLoading(true);
                setComment('');
                alert('submitted')
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
        event.preventDefault();

        var axios = require('axios');
        var data = JSON.stringify({ "id": ratingApi.id, "rating": value, "userID":ratingApi.userID,"transportServiceID":ratingApi.transportServiceID });
        var config = {
            method: 'put',
            url: `https://alphax-api.azurewebsites.net/api/transportServiceRatings/${ratingApi.id}`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                alert('updated');
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const handleInputRatingPost = (event) => {
        // setting the rating value
        setValue(event.target.value);
        console.log("rating -> " + event.target.value);

        event.preventDefault();
        var axios = require('axios');
        var data = JSON.stringify({ "id": ratingApi.id, "rating": value, "userID":userId,"transportServiceID":props.add_id });
        var config = {
            method: 'post',
            url: `https://alphax-api.azurewebsites.net/api/transportServiceRatings/`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                alert('submitted');
            })
            .catch(function (error) {
                console.log(error);
            });

    };
// console.log("rating data=>"+ratingApi.rating)

    const commentListComponent = () => {

        // console.log(commentList.transportServiceComments);
        // console.log("data=> "+eventlist)

        return commentList.transportServiceComments.map((commentListObject) => {
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
                                {users.firstName} {users.lastName}
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



                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-10">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9">

                                    {/* {rating=== 1?
                <Rating
                name="pristine"
                value={ratingApi.rating}
                onChange={handleInputRating}
              />:"hii"}
                  */}

                                    <div className="g-mb-15">
                                        <h5 className="h5 g-color-gray-dark-v1 mb-0 txtcolorx">
                                            {users.firstName} {users.lastName}
                                        </h5>

                                        <span className="g-color-gray-dark-v4 g-font-size-12">
                {new Date().toISOString().slice(0, 10)}
              </span>

                                        <ul className="list-inline d-sm-flex my-0">
                                            <li className="list-inline-item ml-auto">
                                                <center>

                                                    {users.id!==undefined && ordered ? rating===1?
                                                        //     <Rating
                                                        //   name="simple-controlled"
                                                        //   value={ratingApi.rating}
                                                        //   onChange={(event, newValue) => {
                                                        //     setValue(newValue);
                                                        //   }}

                                                        // />
                                                        <div>
                                                            <Rating
                                                                name="simple-controlled"
                                                                value={ratingApi.rating}
                                                                onChange={(event, newValue) => {
                                                                    setValue(newValue);


                                                                }}
                                                            />
                                                            <p>
                                                                <button
                                                                    type="button"
                                                                    class="btn btn-outline-success"
                                                                    onClick={handleInputRating}
                                                                >
                                                                    Edit Your Rate
                                                                </button>
                                                            </p>


                                                        </div>



                                                        :
                                                        //   <Rating
                                                        //   name="simple-controlled"
                                                        //   value={0}
                                                        //   onChange={handleInputRatingPost}


                                                        // />

                                                        <div>
                                                            <Rating
                                                                name="simple-controlled"
                                                                value={value}
                                                                onChange={(event, newValue) => {
                                                                    setValue(newValue);


                                                                }}
                                                            />
                                                            <p>
                                                                <button
                                                                    type="button"
                                                                    class="btn btn-outline-success"
                                                                    onClick={handleInputRatingPost}
                                                                >
                                                                    Submit
                                                                </button>
                                                            </p>


                                                        </div>
                                                        : <p>login to Rating</p> }
                                                </center>

                                            </li>
                                        </ul>
                                        <hr />
                                    </div>

                                </div>

                                {/*{userId!==undefined && ordered ? commentInput()  : <p>login to comment</p> }*/}
                                {users.id!==undefined && ordered? commentInput()  : <p>login to comment</p> }
                                <hr/>
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

const mapStateToProps = (state) => {
    return {
        userCred: state.eventpnl.userCred,
        userid:state.auth.userId,
        isAuthenticated: state.auth.token !== null,

    };
};

export default connect(mapStateToProps)(Comments);
