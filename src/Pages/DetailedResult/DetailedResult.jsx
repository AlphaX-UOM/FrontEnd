import React, { useState, useEffect } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

function DetailedResultPage(props) {
    
    let tranId = props.location.data.transportId;
    let guideId = props.location.data.guidePlanId;
    let event01Id = props.location.data.event01PlanId;
    let event02Id = props.location.data.event02PlanId;
    let hotelId = props.location.data.hotelPlanId;

  const [mytransportList, setmyTransportList] = useState([]);
  const [mytourguideList, setmytourguideList] = useState([]);
  const [myevent01List, setmyevent01List] = useState([]);
  const [myevent02List, setmyevent02List] = useState([]);
  const [myhotelList, setmyhotelList] = useState([]);


  useEffect( () => {
    fetch(`https://localhost:44394/api/transportproviders/${tranId}`).then((response) => {
       return response.json();
     }).then(responseData => {
        setmyTransportList(responseData);
     });
   },[tranId]);
   
 
   useEffect(() => {
     fetch(`https://localhost:44394/api/tourguides/${guideId}`).then((response) => {
       return response.json();
     }).then(responseData => {
        setmytourguideList(responseData);
     });
   }, [guideId]);
 
   
 
   useEffect(() => {
     fetch(`https://localhost:44394/api/eventplanners/${event01Id}`).then((response) => {
       return response.json();
     }).then(responseData => {
        setmyevent01List(responseData);
     });
   }, [event01Id]);

 
   useEffect(() => {
    fetch(`https://localhost:44394/api/eventplanners/${event02Id}`).then((response) => {
      return response.json();
    }).then(responseData => {
       setmyevent02List(responseData);
    });
  }, [event02Id]);


   useEffect(() => {
     fetch(`https://localhost:44394/api/hotels/${hotelId}`).then((response) => {
       return response.json();
     }).then(responseData => {
        setmyhotelList(responseData);
     });
   }, [hotelId]);
 

    return (
        <div>
            <div>
                <Card bg="warning">
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src="https://alawaeltravelandtourism.com/wp-content/uploads/2020/07/Madu-River-Boat-Safari.jpg" />
                        <Card.Body>
                            <Card.Title>Event -: {myevent01List.eventName}</Card.Title>
                            <Card.Text>
                            {myevent01List.otherDetails}
                         </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                        <Rating name="read-only" value={5} readOnly />
    </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://assets.vogue.com/photos/5a5fc7df5323061b7968b63b/16:9/w_2288,h_1287,c_limit/00-promo-sri-lanka.jpg" />
                        <Card.Body>
                            <Card.Title>Transport Provider -: {mytransportList.name}</Card.Title>
                            <Card.Text>
                                {mytransportList.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                          
                                   <Rating name="read-only" value={5} readOnly />
                            
                         </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://res.cloudinary.com/comtech/image/upload/v1490467981/vslt/banner-slide4.jpg" />
                        <Card.Body>
                            <Card.Title>Event -: {myevent02List.eventName}</Card.Title>
                            <Card.Text>
                            {myevent02List.otherDetails}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                        <Rating name="read-only" value={5} readOnly />
                        </Card.Footer>
                    </Card>
                    <Card bg="primary" text="purple" className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                This package includes many more events and destinations. Select the package to
                                <p>
                                <Link to={{pathname: '/payment',data:props.location.data}}>
                                <button class="btn btn-warning">Get Started!</button>
                                </Link>
                                </p>
                           </p>
                        </blockquote>
                    </Card>
                    <Card className="text-center" bg="success">
                        <Card.Body>
                            
                            <Card.Text>
                                You can edit the package or go-back to see other suggestions or skip to plan yourself.
                                <p></p>
                                <p>
                                    <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                        <Link to="/result">
                                        <button class="btn btn-primary">Go Back</button>
                                        </Link>
                                        </div>
                                        <div className="col-4">
                                        <Link to={{pathname: '/payment',data:props.location.data}}>
                                        <button class="btn btn-success">Edit</button>
                                        </Link>
                                        </div>
                                        <div className="col-4">
                                        <Link to="/">
                                        <button class="btn btn-danger">Skip</button>
                                        </Link>
                                        </div>
                                        </div>
                                    </div>
                                </p>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src="https://theluxuryeditor.com/wp-content/uploads/2018/07/109055465.jpg" />
                    </Card>
                    <Card className="text-center">
                    <Card.Title>Hotel :- {myhotelList.hotelName}</Card.Title>
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                            {myhotelList.otherDetails}
                          </p>
                            
                        </blockquote>
                        <Card.Footer className="text-center">
                        <Rating name="read-only" value={5} readOnly />
    </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://www.worldtravelguide.net/wp-content/uploads/2019/03/shu-gen-Sri-Lanka-on-wooden-sign-269107001-1440x823.jpg" />
                        <Card.Body>
                            <Card.Title>Tour Guide -: {mytourguideList.name}</Card.Title>
                            <Card.Text>
                                {mytourguideList.otherDetails}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                        <Rating name="read-only" value={5} readOnly />
    </Card.Footer>
                    </Card>
                </CardColumns>
                </Card>
            </div>
        </div>
    )
}

export default DetailedResultPage;