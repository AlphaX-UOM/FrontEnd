import React,{Component} from 'react';


const Listitemdetails = (props)=> {
//const{data}=props.location.data;
    const { name, id, price, vtype,rating } =
    (props.location && props.location.data) || {};

    return (
        <div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-sm">
                        <h3>{name}</h3>

                    </div>
                    <div className="col-sm">

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <p className="lead">
                            <div className="row">
                                <div className="col text-center">Vehicle type:</div>
                                <div className="col">{vtype}</div>
                            </div>
                        </p>
                        <p className="lead">
                            <div className="row">
                                <div className="col text-center">Price:</div>
                                <div className="col"> {price}</div>
                            </div>

                        </p>
                        <p className="lead">
                            <div className="row">
                                <div className="col text-center">Description</div>
                                <div className="col"> {price}</div>
                            </div>

                        </p>
                    </div>

                    <div className="col-sm">
                        <p className="lead">
                            <div className="row">
                                <div className="col text-center">TP :</div>
                                <div className="col"> {price}</div>
                            </div>

                        </p>
                        <p className="lead">
                            <div className="row">
                                <div className="col text-center">  Email :</div>
                                <div className="col"> {price}</div>
                            </div>

                        </p>
                        <p className="lead">
                            <div className="row">
                                <div className="col text-center">Rating :</div>
                                <div className="col"> {rating}</div>
                            </div>

                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-sm">


                    </div>
                    <div className="col-sm">

                    </div>
                </div>
            </div>

        </div>


    )
}


export default Listitemdetails;
