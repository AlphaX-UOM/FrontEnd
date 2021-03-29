import React, {useEffect, useState} from "react";
import "./comments.css";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Comment from "./ItemOneComment";
import {connect} from "react-redux";
import axios from "axios";

const Comments = (props) => {
    const [commentList, setCommentList] = useState();
    const [value, setValue] = React.useState(2);
    const [comment, setComment] = useState();
    const [avgrate, setAvgrate] = useState();
    const [ordered, setOrdered] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFormData = () => {
        if (props.userCred.id !== undefined && ordered) {
            let commentObject = {
                createdAt: new Date(),
                rating: value,
                content: comment,
                userID: props.userCred.id,
                transportServiceID: props.id,
            };

            axios
                .post(
                    "https://alphax-api.azurewebsites.net/api/TransportServiceComments",
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
            "https://alphax-api.azurewebsites.net/api/transportservices/GetTransportDetails/" +
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
            "https://alphax-api.azurewebsites.net/api/TransportServiceReservations"
        )
            .then((res) => res.json())
            .then((data) => {

                if (props.userCred.id !== undefined) {
                    console.log("user -> " + props.userCred.id);
                    data = data.filter((item) => item.userID === props.userCred.id && item.transportServiceID === props.id);

                    if (data[0] !== undefined) {
                        setOrdered(true);
                    } else {
                        setOrdered(false);
                    }
                }
            });
    }, []);

    const commentListComponent = () => {
        // console.log(commentList);
        return commentList.transportServiceComments.map((commentListObject) => {
            return <Comment data={commentListObject}/>;
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
                                <Rating
                                    name="pristine"
                                    value={value}
                                    onChange={handleInputRating}
                                />
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
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <div className="container">
                            <div className="row">


                                {/* another comment starts */}
                                {/*{props.userCred.id!==undefined && ordered ?  : <p>login to comment</p> }*/}
                                {commentInput()}
                                {commentListComponent()}
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
