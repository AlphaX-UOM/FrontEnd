import React from "react";
import './ResultComponent.css';
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function resultComponent() {
    return (
        <div>

            <Card  style={{ width: '18rem', display:'inline-block' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2LGg2aZv5E73_NS4xWL9rqarvdMtFEEV3wQ&usqp=CAU" />
                <Card.Body >
                    <Card.Text >
                       <h6>This contain experiances in adventure.</h6> 
                    </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                 <ListGroupItem>Events :- Boat Safari-Muthrajawela, Anuradhapura Pilgrims</ListGroupItem>
                 <ListGroupItem>Hotel :- The Fortress - Galle</ListGroupItem>
                 <ListGroupItem>Tour Guide :- Sanath Jayasuriya</ListGroupItem>
                 <ListGroupItem>Transport Provider :- Uber</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Link to="/result/detailedresult">
                        <button class="btn btn-warning">Select This</button>
                     </Link>
                </Card.Body>
            </Card>

        </div>
    );
}

export default resultComponent;
