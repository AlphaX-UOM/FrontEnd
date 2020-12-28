import React,{Component} from 'react';
import './listitemdetails.css'
import axios from 'axios';
import post from "../../../Post/post";
import { useParams } from 'react-router-dom';
import Logo1 from '../../../../images/vehicle/itemimages/Intermediate.jpg';
import Logo2 from '../../../../images/vehicle/slide/v.jpg';
import Logo3 from '../../../../images/vehicle/slide/suv.jfif';
import Logo4 from '../../../../images/vehicle/slide/Bus.jfif';
import * as actions from "../../../../store/lib/actions";
import connect from "react-redux/es/connect/connect";
class Listitemdetails extends Component {


    state = {

        providers :[],
        loadedPost: null,
        userId:null

    }

    componentDidMount() {
            fetch('http://localhost:5000/api/TransportServices/'+this.props.match.params.id)
            .then(res => res.json())
            .then(provider =>
                this.setState({ providers:provider})

            )
            .catch(error => {

                this.setState({error: true});
            });
            // console.log(this.props);
            // this.props.onInitTransportProvider(this.props.match.params.id);

    }

    componentDidUpdate() {
       // this.loadData();
    }

    loadData() {
        // if (this.props.match.params.id) {
        //     if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
        //         axios.get('/transportproviderlist/' + this.props.match.params.id)
        //             .then(response => {
        //                 // console.log(response);
        //                 this.setState({loadedPost: response.data});
        //             });
        //     }
       // }
    }

    render() {



        return (
            <div>
                    <br/>
                    <div className="container" >
                        <div className="row">
                            <div className="col-sm">

                            </div>
                            <div className="col-sm">
                                <h3>{this.state.providers.name}</h3>
                            </div>
                            <div className="col-sm">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">

                            </div>
                            <div className="col-sm">
                                {
                                    ( this.state.providers.vehicleType === 'Car')
                                        ? <img src={Logo1} alt=""/>
                                        :''
                                }
                                {
                                    ( this.state.providers.vehicleType === 'Van')
                                        ? <img src={Logo2} alt=""/>
                                        :''
                                }
                                {
                                    ( this.state.providers.vehicleType === 'Suv')
                                        ? <img src={Logo3} alt=""/>
                                        :''
                                }
                                {
                                ( this.state.providers.vehicleType === 'Bus')
                                    ? <img src={Logo4} alt=""/>
                                    :''
                                 }

                            </div>
                            <div className="col-sm">
                        <span className="lead">
                            <div className="row">

                                <div className="col">Excellent <span className="badge badge-success">4.3</span></div>

                            </div>
                            <div className="row">
                            <div className="col">   <span className="badge badge-secondary">Reviews</span></div>


                            </div>
                        </span>
                            </div>
                        </div>
                        <br/>
                        <div className="row ">
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm debackcolor" >
                                <div className="depad">
                        <span className="lead  ">
                            <div className="row ">
                                <div className="col text-center alert alert-dark">Vehicle type</div>
                                <div className="col ">
                                    <div className="alert alert-secondary" role="alert">
                                    {this.state.providers.vehicleType}
                                </div>

                                    </div>
                            </div>
                        </span>

                                <span className="lead">
                            <div className="row">
                                <div className="col text-center alert alert-dark">Price Per Day</div>
                                <div className="col">
                                        <div className="alert alert-secondary" role="alert">
                                      {this.state.providers.pricePerDay}
                                </div>
                                  </div>
                            </div>

                        </span>




                            <span className="lead">
                            <div className="row">
                                <div className="col text-center alert alert-dark">TP :</div>
                                <div className="col">
                                        <div className="alert alert-secondary" role="alert">
                                   {this.state.providers.pnumber}
                                </div>
                                   </div>
                            </div>

                        </span>

                                <span className="lead">
                            <div className="row">
                                <div className="col text-center alert alert-dark">Email :</div>
                                <div className="col">
                                    <div className="alert alert-secondary" role="alert">
                                    {this.state.providers.email}
                                </div></div>
                            </div>

                        </span>

                                <span className="lead">
                            <div className="row">
                                <div className="col text-center alert alert-dark">Address:</div>
                                <div className="col">
                                    <div className="alert alert-secondary" role="alert">
                                    {this.state.providers.address}
                                </div></div>
                            </div>

                        </span>

                                <span className="lead">
                            <div className="row">
                                <div className="col text-center alert alert-dark">District</div>
                                <div className="col">
                                    <div className="alert alert-secondary" role="alert">
                                    {this.state.providers.district}
                                </div>
                                </div>
                            </div>
                         <span className="lead">
                            <div className="row">
                                <div className="col text-center alert alert-dark">Description</div>
                                <div className="col">
                                        <div className="alert alert-secondary" role="alert">
                                     {this.state.providers.description}
                                </div>
                                 </div>
                            </div>
                        </span>
                        </span>
                            </div>
                            </div>
                            <div className="col-sm-2">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">

                            </div>
                            <div className="col-sm">


                            </div>
                            <div className="col-sm depad">
                                <button type="button" className="btn btn-primary " onClick={() => this.props.add_to_cart(this.state.providers.vehicleType,this.state.providers.pricePerDay)}>Book Now</button>
                            </div>
                        </div>
                    </div>

                </div>
        )

    }
}
const mapStateToProps = state => {
    return {

        provider_array: state.transport_reducer.provider,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        // onInitTransportProvider: (id) => dispatch(actions.initTransportProvider(id)),
         add_to_cart:(item,qty) => dispatch(actions.addToCart(item,qty))

    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Listitemdetails);
