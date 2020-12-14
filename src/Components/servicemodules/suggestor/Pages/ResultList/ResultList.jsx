import React from 'react';
import './ResultComponents.css';
// import { Carousel } from 'react-bootstrap';
import ResultSlider from './ResultSlider';
import { Carousel,Card } from 'react-bootstrap';
import { connect } from 'react-redux'

function resultList(props) {

    
    

    return (

        <div>
            <div className="container-fluid">

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
                                <ResultSlider idss={1} />
                            </Carousel.Item>
                            <Carousel.Item interval={10000}>
                                <ResultSlider idss={2} />
                            </Carousel.Item>
                            <Carousel.Item interval={10000}>
                                <ResultSlider idss={3} />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        formdata: state.formdata
    }
}

export default connect(mapStateToProps)(resultList);

