import React from "react";
import './ResultComponent.css';
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function resultComponent(props) {

    let selectId = {
        transportId : props.transId,
        guidePlanId: props.tourId,
        event01PlanId: props.event01Id,
        event02PlanId: props.event02Id,
        hotelPlanId: props.hotelId
    }


    return (
        <div>

            <Card  style={{ width: '18rem', display:'inline-block' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2LGg2aZv5E73_NS4xWL9rqarvdMtFEEV3wQ&usqp=CAU" />
                <Card.Body >
                    <Card.Text >
                       <h6>{props.type}</h6> 
                    </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 <ListGroupItem className="text-muted">
                   <h9>  Events :-<ul><li> {props.event01}</li><li>{props.event02}</li></ul> </h9>
                 </ListGroupItem>
                 <ListGroupItem>Hotel :- {props.hotel}</ListGroupItem>
                 <ListGroupItem>Tour Guide :- {props.tourguide}</ListGroupItem>
                 <ListGroupItem>Transport Provider :- {props.transport}</ListGroupItem>
                </ListGroup>
                <Card.Body className="text-center">
                    <Link to={{pathname: '/detailedresult',data:selectId}}>
                        <button class="btn btn-warning">Select This</button>
                     </Link>
                </Card.Body>
            </Card>

        </div>
    );
}

export default resultComponent;
