import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function detailedResultPage() {
    return (
        <div>
            <div>
                <Card bg="warning">
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/LmzcfJN6tx-6R8aVROe6tfs-gnKrxoUHDCaFyODhjctc0sXZOg9IfONJAuebnorqDe-k2yj5s7wuoTpu49WmczooNdq0_MQ7ReotpJPwmV6ouk6CV5LUwnYnfmCdeKxpsA" />
                        <Card.Body>
                            <Card.Title>Event -: Boat Safari-Muthrajawela</Card.Title>
                            <Card.Text>
                            Let's have a boat safari in Muthurajawela wetlands.
                         </Card.Text>
                        </Card.Body>
                        <Card.Footer>
      <small className="text-muted">Ratings -: 4stars</small>
    </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://assets.vogue.com/photos/5a5fc7df5323061b7968b63b/16:9/w_2288,h_1287,c_limit/00-promo-sri-lanka.jpg" />
                        <Card.Body>
                            <Card.Title>Transport Provider -: Uber Transport</Card.Title>
                            <Card.Text>
                                We are having many comfortable vehicles and involves in tourism industry for more than 7 years.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
      <small className="text-muted">Ratings -: 4stars</small>
    </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://res.cloudinary.com/comtech/image/upload/v1490467981/vslt/banner-slide4.jpg" />
                        <Card.Body>
                            <Card.Title>Event -: Anuradhapura Pilgrims</Card.Title>
                            <Card.Text>
                                Anuradhapura is a secret city which contains pilgrims and palaces of ancients kings of Sri Lanka.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
      <small className="text-muted">Ratings -: 4stars</small>
    </Card.Footer>
                    </Card>
                    <Card bg="primary" text="purple" className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                This package includes many more events and destinations. Select the package to
                                <p>
                                <Link to="/payment">
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
                                        <Link to="/payment">
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
                    <Card.Title>Hotel :- The Fortress - Galle</Card.Title>
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                            As the name suggests,the resort has a colonial feel with the spectacular Galle Beach as a backdrop. Come enjoy!.
                          </p>
                            
                        </blockquote>
                        <Card.Footer>
      <small className="text-muted">Ratings -: 4stars</small>
    </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://www.worldtravelguide.net/wp-content/uploads/2019/03/shu-gen-Sri-Lanka-on-wooden-sign-269107001-1440x823.jpg" />
                        <Card.Body>
                            <Card.Title>Tour Guide -: Sanath Jayasuriya</Card.Title>
                            <Card.Text>
                                I'm Sanath Jayasuriya, I worked as a tour guide for more than 10 years. 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
      <small className="text-muted">Ratings -: 4stars</small>
    </Card.Footer>
                    </Card>
                </CardColumns>
                </Card>
            </div>
        </div>
    )
}

export default detailedResultPage;