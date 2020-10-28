import React from 'react';
import './ResultComponents.css';
// import { Carousel } from 'react-bootstrap';
import ResultSlider from './ResultSlider';

function resultList() {
    return (
        <div>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-3">
                        <p>This is my text</p>
                    </div>
                    <div className="col-9">
                        {/* <Carousel>
                        <Carousel.Item interval={10000}> */}
                        {/* <ResultSlider /> */}
                        {/* </Carousel.Item> */}
                        {/* <Carousel.Item interval={10000}> */}
                        {/* <ResultSlider /> */}
                        {/* </Carousel.Item> */}
                        {/* <Carousel.Item interval={10000}> */}
                        <ResultSlider />
                        {/* </Carousel.Item> */}
                        {/* </Carousel> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default resultList;