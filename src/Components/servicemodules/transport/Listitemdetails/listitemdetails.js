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
import {History} from 'react-router-dom';
import Ratingimport from '../comments/displayratings'

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
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }
    handlecarClik() {
        this.setState( {hidden1: !this.state.hidden1} )
    }

    handlesubmit =(e) =>{
        console.log(this.props.distance_text)
        var txt = this.props.distance_text;
        var numb = Number(txt.replace(/[^0-9\.]+/g,""));
        console.log(numb)


        this.props.add_to_cart(this.state.providers.vehicleType,
            this.state.selectedOption==='Per_day'?this.state.providers.pricePerDay:this.state.providers.pricePer1KM,
            this.state.providers.id,
            this.props.no_travellers,
            this.state.currentDate,
            'Transport',
            this.state.selectedOption==='Per_day'?
                ((new Date(this.props.drop_date).getTime()-new Date(this.props.pickup_date).getTime())/(1000 * 3600 * 24)+1)*this.state.providers.pricePerDay:
                ((this.props.rounded===''?numb:numb*2)*this.state.providers.pricePer1KM),
            this.state.selectedOption==='Per_day'?((new Date(this.props.drop_date).getTime()-new Date(this.props.pickup_date).getTime())/(1000 * 3600 * 24)+1)+" days":((this.props.rounded===''?numb:numb*2))+" km",
            this.props.pickup_date,
            this.props.pickup_time,
            this.props.pickup_location,
            this.props.drop_date,
            this.props.drop_time,
            this.props.drop_location
            );

        this.props.history.push('/shoppingcart')
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
       // console.log(this.props.no_travellers,this.props.drop_location,this.props.drop_date,this.props.drop_time,this.props.pickup_location,this.props.pickup_date,this.props.pickup_time,this.props.rounded);

    }

    componentDidUpdate() {

    }



    render() {
        let comment=(
            <div hidden={(!this.state.hidden1)? "hidden1" : ""}>
                <Comments add_id={this.props.match.params.id} />
            </div>
        );





        return (
            <div className="">
                    <br/>
                    <div className="container border border-success  " >
                        <br/>
                        <div className="row ">
                            <div className="col-sm-1">
                            </div>
                            <div className="col-sm-4 imgcolor " >
                                <br/>
                                <div className="col-sm-12 ">
                                    <h3 className="txtcolorx">{this.state.providers.brand} {this.state.providers.model} {this.state.providers.vehicleType}</h3>
                                    <hr/>
                                </div>
                                <br/>


                                <div className="col-sm-12">
                                    {
                                        ( this.state.providers.vehicleType === 'Car')
                                            ?<img src={this.state.providers.imgURL || "http://via.placeholder.com/300"} alt="firebase-image" className='imgsize' />
                                            :''
                                    }
                                    {
                                        ( this.state.providers.vehicleType === 'Van')
                                            ? <img src={this.state.providers.imgURL || "http://via.placeholder.com/300"} alt="firebase-image" className='imgsize' />
                                            :''
                                    }
                                    {
                                        ( this.state.providers.vehicleType === 'Suv')
                                            ?  <img src={this.state.providers.imgURL || "http://via.placeholder.com/300"} alt="firebase-image" className='imgsize' />
                                            :''
                                    }
                                    {
                                        ( this.state.providers.vehicleType === 'Bus')
                                            ? <img src={this.state.providers.imgURL || "http://via.placeholder.com/300"} alt="firebase-image" className='imgsize' />
                                            :''
                                    }
                                </div>
                                <br/>
                                <div className="col-sm-12">
                        <span className="lead">
                            <div className="row">

                                <div className="col-sm">
                                    <Ratingimport id={this.props.match.params.id}/>

                                </div>
                            </div>

                            <div className="row">
                                <Link onClick={this.handlecarClik.bind(this)} >
                            <div className="col txtcolorx rev-col "><small className="iconpad"> Reviews</small><ChatBubbleOutlineIcon fontSize="small"  /></div>
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
                            <div className="row">
                                <div className="col-sm-4"><strong>Owner :</strong> </div>
                                <div className="col-sm-8">
                                        <div className="" >
                                    {this.state.providers.name} - {this.state.providers.district}
                                </div>
                                  </div>
                            </div>



                        </span>


                                            <span className="">
                            <div className="row">
                                <div className="col-sm-4"><strong>District :</strong></div>
                                <div className="col-sm-8">
                                    <div className="text-uppercase" role="alert">
                                    {this.state.providers.district}
                                </div>
                                </div>
                            </div>

                        </span>


                                            <span className="">
                            <div className="row">
                                <div className="col-sm-4"><strong>Address :</strong></div>
                                <div className="col-sm-8">
                                    <div className="" role="alert">
                                    {this.state.providers.address}
                                </div></div>
                            </div>

                        </span>
                                            <span className="">
                            <div className="row">
                                <div className="col-sm-4"><strong>TP :</strong></div>
                                <div className="col-sm-8">
                                        <div className="" role="alert">
                                   {this.state.providers.pnumber}
                                </div>
                                   </div>
                            </div>

                        </span>

                                            <span className="">
                            <div className="row">
                                <div className=" col-sm-4"><strong>Email :</strong></div>
                                <div className="col-sm-8">
                                    <div className="" role="alert">
                                    {this.state.providers.email}
                                </div></div>
                            </div>

                              </span>


                                            <span className="">
                            <div className="row">
                                <div className="col-sm-4"><strong>Air Condition :</strong></div>
                                <div className="col-sm-8">
                                        <div className=" " role="alert">
                                     {/*{this.state.providers.airCondition.toString()}*/}

                                            {
                                                ( this.state.providers.airCondition === true)
                                                    ? 'Available'
                                                    :'Not Available'
                                            }
                                </div>
                                 </div>
                            </div>
                        </span>




                                            <span className="">
                            <div className="row">
                                <div className="col-sm-4"><strong>Description :</strong></div>
                                <div className="col-sm-8">
                                        <div className=" " role="alert">
                                     {this.state.providers.description}
                                </div>
                                 </div>
                            </div>
                        </span>
                                            <br/>
                                            <span className="">
                            <div className="row txtcolorx">
                                <div className="col-sm-5 h5"><strong>Price Per 1KM :</strong> </div>
                                <div className="col-sm-7">
                                        <div className="h5" >
                                      $ {this.state.providers.pricePer1KM}
                                </div>
                                  </div>
                            </div>

                        </span>

                                            <span className="">
                            <div className="row txtcolorx">
                                <div className="col-sm-5 h5"><strong>Price Per Day :</strong> </div>
                                <div className="col-sm-7">
                                        <div className="h5" >
                                      $ {this.state.providers.pricePerDay}
                                </div>
                                  </div>
                            </div>

                        </span>
                                            <hr/>

                                                <form onSubmit={this.handlesubmit}>
                                                     <span className="">
                                                      <div className="row">
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="p_methode"  checked={this.state.selectedOption === "Per_day"}
                                               onChange={this.onValueChange}
                                               id="exampleRadios1" value="Per_day" required/>
                                            <label className="form-check-label" htmlFor="exampleRadios1">
                                              Pay for day
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="p_methode"
                                               id="exampleRadios2" value="Per_distance" checked={this.state.selectedOption === "Per_distance"}
                                               onChange={this.onValueChange}required />
                                            <label className="form-check-label" htmlFor="exampleRadios2">
                                                    Pay for distance
                                            </label>
                                    </div>

                                </div>
                            </div>

                        </span>
                                            <div className="row">
                                                <div className="col-sm">

                                                </div>
                                                <div className="col-sm">


                                                </div>

                                                    <button type="submit" className="btn btn-primary  subbtn">Book Now</button>

                                            </div>
                                                </form>




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
        drop_location: state.transport_input_reducer.form_drop_location,
        drop_date:state.transport_input_reducer.form_drop_date,
        drop_time:state.transport_input_reducer.form_drop_time,
        pickup_location:state.transport_input_reducer.form_pickup_location,
        pickup_date:state.transport_input_reducer.form_pickup_date,
        pickup_time:state.transport_input_reducer. form_pickup_time,
        rounded:state.transport_input_reducer.form_rounded,
        distance_text:state.transport_input_reducer.form_distance_text

    }
};

const mapDispatchToProps = dispatch => {
    return {
        // onInitTransportProvider: (id) => dispatch(actions.initTransportProvider(id)),
         add_to_cart:(Servicename,unit_price,add_id,no_travellers,Current_date,type,totalprice,units,checkin_date,checkin_time,checkin_location,checkout_date,checkout_time,checkout_location) => dispatch(actions.addToCart(Servicename,unit_price,add_id,no_travellers,Current_date,type,totalprice,units,checkin_date,checkin_time,checkin_location,checkout_date,checkout_time,checkout_location))

    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Listitemdetails);
