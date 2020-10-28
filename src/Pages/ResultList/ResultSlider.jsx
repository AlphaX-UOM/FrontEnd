import React from 'react';
import ResultComponent from './ResultComponent';
import { CardDeck } from 'react-bootstrap';


function resultSlider() {
    return (
        <div>
            <CardDeck>
                <ResultComponent />
                <ResultComponent />
                <ResultComponent />
            </CardDeck>
        </div>
    );
}

export default resultSlider;