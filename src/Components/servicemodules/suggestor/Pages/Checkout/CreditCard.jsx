import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function creditCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://freepngimg.com/thumb/credit_card/26121-1-credit-card-clipart.png" />
                <Card.Body>
                    <Card.Text>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Card Number</span>
                            </div>
                            <input type="number" min="0" className="form-control" aria-label="Username" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text ">Exp. Date</span>
                            </div>
                            <input type="date" aria-label="First name" className="form-control" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">CVV</span>
                            </div>
                            <input type="number" min="0" className="form-control" aria-label="Username"
                            />
                        </div>
                    </Card.Text>
                    <Card.Text className="text-center" >
                        <Link to="/thank">
                        <Button variant="primary">Pay Now</Button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default creditCard;