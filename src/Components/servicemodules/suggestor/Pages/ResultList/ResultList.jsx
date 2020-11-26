import React from 'react';
import './ResultComponents.css';
// import { Carousel } from 'react-bootstrap';
import ResultSlider from './ResultSlider';
import { Carousel,Card } from 'react-bootstrap';

function resultList(props) {

    let travellers = props.location.data.travelers;
    let budget = props.location.data.budget;
    let days = props.location.data.days;
    console.log(travellers);
    

    return (

        <div>
            <div className="container-fluid container-fluid-s">

                <div className="row">
                    <div className="col-3">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Card className="shadow-lg" style={{ width: '18rem'}}>
                            <Card.Body style={{background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',borderRadius: '3',border: '0',color: 'white',boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'}}>
                                <Card.Text className="text-center">
                                  <h6>Explore Suggestions!</h6>
                                  <p>Our Engine generated best packages for you!</p>
                                  <h9>Select a package to explore more!</h9>
                                </Card.Text>
                            </Card.Body>
                        </Card>



                    </div>
                    <div className="col-9">
                        <Carousel>
                            <Carousel.Item interval={10000}>
                                <ResultSlider id={1} travellers={travellers} budget={budget} days={days} />
                            </Carousel.Item>
                            <Carousel.Item interval={10000}>
                                <ResultSlider id={2} travellers={travellers} budget={budget} days={days}/>
                            </Carousel.Item>
                            <Carousel.Item interval={10000}>
                                <ResultSlider id={3} travellers={travellers} budget={budget} days={days}/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default resultList;

