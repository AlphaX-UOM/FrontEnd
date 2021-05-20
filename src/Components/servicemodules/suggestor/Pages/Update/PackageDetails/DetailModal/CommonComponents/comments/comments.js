import React, { useEffect, useState } from "react";
import './comments.css';
import OneComment from './OneComment';
import { connect } from "react-redux";


const Comments = (props) => {
    const [commentList, setCommentList] = useState();

    useEffect(() => {

        if (props.item.type === "Transport Service") {
            fetch(
                "https://alphax-api.azurewebsites.net/api/transportservices/GetTransportDetails/" +
                props.item.item.id
            )
                .then((res) => res.json())
                .then((data) => {
                    setCommentList(data);
                });

        } else if (props.item.type === "Tour Guide Service") {
            fetch(
                "https://alphax-api.azurewebsites.net/api/tourguideservices/GetGuideDetails/" +
                props.item.item.id
            )
                .then((res) => res.json())
                .then((data) => {
                    setCommentList(data);
                });

        } else if (props.item.type === "Event Service") {
            fetch(
                "https://alphax-api.azurewebsites.net/api/eventplannerservices/GetEventDetails/" +
                props.item.item.id
            )
                .then((res) => res.json())
                .then((data) => {
                    setCommentList(data);
                });

        } else {
            fetch(
                "https://alphax-api.azurewebsites.net/api/hotelsservices/GetHotelDetails/" +
                props.item.item.id
            )
                .then((res) => res.json())
                .then((data) => {
                    setCommentList(data);
                });

        }

    }, [props.item.item.id]);



    const commentListComponent = () => {
        try {

            if (commentList === undefined) {
                return <p>loading</p>
            } else if (props.item.type === "Transport Service") {
                return commentList.transportServiceComments.map((commentListObject) => {
                    return <OneComment firstName={commentListObject.user.firstName} lastName={commentListObject.user.firstName} createdAt={commentListObject.createdAt} content={commentListObject.content} />;
                });

            } else if (props.item.type === "Tour Guide Service") {
                return commentList.tourGuideServiceComments.map((commentListObject) => {
                    return <OneComment firstName={commentListObject.user.firstName} lastName={commentListObject.user.firstName} createdAt={commentListObject.createdAt} content={commentListObject.content} />;
                });

            } else if (props.item.type === "Event Service") {
                return commentList.eventPlannerServiceComment.map((commentListObject) => {
                    return <OneComment firstName={commentListObject.user.firstName} lastName={commentListObject.user.firstName} createdAt={commentListObject.createdAt} content={commentListObject.content} />;
                });

            } else {
                return commentList.hotelsServiceComment.map((commentListObject) => {
                    return <OneComment firstName={commentListObject.user.firstName} lastName={commentListObject.user.firstName} createdAt={commentListObject.createdAt} content={commentListObject.content} />;
                });
            }
        } catch (e) {
            return <p>No comments</p>
        }
    };


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
                                {commentListComponent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        item: state.eventpnl.item,
    };
};

export default connect(mapStateToProps, null)(Comments);