import React from 'react';

function thank() {
    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: "grey" }}>
                <div class="card" style={{ height: '550px', width: '1000px',backgroundColor: "blue" }}>
                    <div className="row">
                        <div className="col-7">
                            <img class="card-img" src="http://exemplaryvoyages.com/images/srilanka-map.png" alt="Cardupper" style={{ height: '500px', width: '400px' }} />
                        </div>
                        <div className="col-5">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <div class="card bg-warning  text-center p-3">
                                <blockquote class="blockquote mb-0">
                                    <p>Thank you for your Payment</p>
                                </blockquote>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div class="card bg-warning  text-center p-3">
                                <blockquote class="blockquote mb-0">
                                    <p>Enjoy your Vacation!</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default thank;