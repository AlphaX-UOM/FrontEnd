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
import {Link} from 'react-router-dom'
import Ratings from '../rating-mod/ratingm'
import Ratingsm from '../rating-mod/ratings'
import Comments from '../comments/comments'
import Listitem from "../Listitem/listitem";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


class Listitemdetails extends Component {
    constructor() {
        super();

        var today = new Date(),

            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            providers :[],
            loadedPost: null,
            userId:null,
            travellers: 5,
            hidden1: false,
            currentDate: date
        };

    }


    handlecarClik() {
        this.setState( {hidden1: !this.state.hidden1} )
    }

    componentDidMount() {


            fetch('https://alphax-api.azurewebsites.net/api/TransportServices/'+this.props.match.params.id)
            .then(res => res.json())
            .then(provider =>
                this.setState({ providers:provider})

            )
            .catch(error => {

                this.setState({error: true});
            });

        console.log(this.props.no_travellers,this.props.drop_location,this.props.drop_date,this.props.drop_time,this.props.pickup_location,this.props.pickup_date,this.props.pickup_time,this.props.rounded);


        // console.log(this.state.travellers)
            // console.log(this.props);
            // this.props.onInitTransportProvider(this.props.match.params.id);

    }

    componentDidUpdate() {

    }



    render() {
    let comment=(
        <div hidden={(!this.state.hidden1)? "hidden1" : ""}>
            <Comments />
        </div>
    );




        return (
            <div className="">
                    <br/>
                    <div className="container debackcolor" >
                        <br/>
                        <div className="row ">
                            <div className="col-sm-1">
                            </div>
                            <div className="col-sm-4 imgcolor" >
                                <br/>
                                <div className="col-sm-12 ">
                                    <h3 className="txtcolorx">{this.state.providers.name}</h3>
                                </div>


                                <div className="col-sm-12">
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

                                <div className="col-sm-12">
                        <span className="lead">
                            <div className="row">

                                <div className="col-sm"><Ratings/></div>
                                   <div className="col-sm txtcolorx">Excellent</div>

                            </div>

                            <div className="row">
                                <Link onClick={this.handlecarClik.bind(this)}>
                            <div className="col txtcolorx"><small className="iconpad">Customer Reviews</small><ChatBubbleOutlineIcon fontSize="small"  /></div>
                                </Link>



                            </div>
                        </span>
                                </div>
                                <br/>
                            </div>
                            <div className="col-sm-7 ">


                                <div className="row ">
                                    <div className="col-sm-2">
                                    </div>
                                    <div className="col-sm " >
                                        <div className="depad">

                                            <br/>
                        <span className="">
                            <div className="row ">
                                <div className="">Vehicle type :</div>
                                <div className="col ">
                                    <div className="" role="alert">
                                    {this.state.providers.vehicleType}
                                </div>

                                    </div>
                            </div>
                        </span>

                                            <span className="">
                            <div className="row">
                                <div className="">Price Per Day :</div>
                                <div className="col">
                                        <div className="" >
                                      ${this.state.providers.pricePerDay}
                                </div>
                                  </div>
                            </div>

                        </span>




                                            <span className="">
                            <div className="row">
                                <div className="">TP :</div>
                                <div className="col">
                                        <div className="" role="alert">
                                   {this.state.providers.pnumber}
                                </div>
                                   </div>
                            </div>

                        </span>

                                            <span className="">
                            <div className="row">
                                <div className=" ">Email :</div>
                                <div className="col">
                                    <div className="" role="alert">
                                    {this.state.providers.email}
                                </div></div>
                            </div>

                        </span>

                                            <span className="">
                            <div className="row">
                                <div className="">Address :</div>
                                <div className="col">
                                    <div className="" role="alert">
                                    {this.state.providers.address}
                                </div></div>
                            </div>

                        </span>

                                            <span className="">
                            <div className="row">
                                <div className="">District :</div>
                                <div className="col">
                                    <div className="" role="alert">
                                    {this.state.providers.district}
                                </div>
                                </div>
                            </div>
                         <span className="">
                            <div className="row">
                                <div className="">Description :</div>
                                <div className="col">
                                        <div className=" " role="alert">
                                     {this.state.providers.description}
                                </div>
                                 </div>
                            </div>
                        </span>
                        </span>

                                            <div className="row">
                                                <div className="col-sm">

                                                </div>
                                                <div className="col-sm">


                                                </div>
                                                <Link className="col-sm depad" to="/shoppingcart">
                                                    <button type="button" className="btn btn-primary "  onClick={() => this.props.add_to_cart(this.state.providers.vehicleType,this.state.providers.pricePerDay,this.state.providers.id,this.props.no_travellers,this.state.currentDate)}>Book Now</button>
                                                </Link>
                                            </div>



                                        </div>
                                    </div>
                                    <div className="col-sm-1">

                                    </div>
                                </div>


                            </div>



                            <div className="col-sm-1">
                            </div>

                        </div>

                        <br/>

                        {comment}

                    </div>
                <br/>
                </div>
        )

    }
}
const mapStateToProps = state => {
    return {

        provider_array: state.transport_reducer.provider,
        no_travellers: state.transport_input_reducer.form_no_travellers,
        drop_location: state.transport_input_reducer. form_drop_location,
        drop_date:state.transport_input_reducer.form_drop_date,
        drop_time:state.transport_input_reducer.form_drop_time,
        pickup_location:state.transport_input_reducer.form_pickup_location,
        pickup_date:state.transport_input_reducer.form_pickup_date,
        pickup_time:state.transport_input_reducer.form_drop_time,
        rounded:state.transport_input_reducer.form_rounded

    }
};

const mapDispatchToProps = dispatch => {
    return {
        // onInitTransportProvider: (id) => dispatch(actions.initTransportProvider(id)),
         add_to_cart:(item,qty,add_id,no_travellers,date) => dispatch(actions.addToCart(item,qty,add_id,no_travellers,date))

    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Listitemdetails);
