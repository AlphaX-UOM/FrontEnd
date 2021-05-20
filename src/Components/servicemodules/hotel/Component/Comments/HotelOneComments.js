import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import React, { useEffect, useState } from "react";
import connect from "react-redux/es/connect/connect";
import Container from './CommentEdit/container';
import Modal from "react-bootstrap/Modal";

function HotelOneComments(props) {

    const [showText, setShowText] = useState(false);
    const [users, setUsers] = useState([]);

    
    
    var userId = props.data.userID;

    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const triggerText = 'Edit';
const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);

};

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

    var cId=props.data.id;

    const DeleteComment = (e) => {

        e.preventDefault();
      
      
        var axios = require('axios');
        var cId=props.data.id;
      
        
        var config = {
            method: 'delete',
            url: `https://alphax-api.azurewebsites.net/api/eventplannerservicecomments/${cId}`,
            headers: {
                'Content-Type': 'application/json',
      
            },
            
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
      
      handleClose();
      
      };


    console.log("my Id: " + props.data.userID)
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

{props.userid===props.data.userID?
                   <Container triggerText={triggerText} onSubmit={onSubmit} data={cId} />:
                 " "
                  }

{props.userid===props.data.userID?
                   <button
                   type="button"
                   class="btn btn-outline-danger"
                   onClick={handleShow}
                  
                 > Delete 
                 </button>:
                 " "
                  }
                 


                </div>

                <div>
        <Modal show={show} onHide={handleClose}>
     
        <Modal.Body>Are you sure want to Delete?</Modal.Body>
        <Modal.Footer>
        <button className="btn btn-danger " type='submit'onClick={handleClose}>Close</button>
          <button className="btn btn-success" type='submit' onClick={DeleteComment}>   Delete
        </button>
         
        </Modal.Footer>
      </Modal>

 </div>

            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        userCred: state.eventpnl.userCred,
        userid: state.auth.userId,

    };
};


export default connect(mapStateToProps)(HotelOneComments);