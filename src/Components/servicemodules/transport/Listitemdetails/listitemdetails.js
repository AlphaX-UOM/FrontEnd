import React,{Component} from 'react';
import './listitemdetails.css'
import axios from 'axios';
import post from "../../../Post/post";
import { useParams } from 'react-router-dom';
import Logo1 from '../../../../images/vehicle/itemimages/Intermediate.jpg';
import Logo2 from '../../../../images/vehicle/slide/v.jpg';
import Logo3 from '../../../../images/vehicle/slide/suv.jfif';
import Logo4 from '../../../../images/vehicle/slide/Bus.jfif';
class Listitemdetails extends Component {


    state = {  providers :[],
        loadedPost: null,
        userId:null

    }

    componentDidMount() {
            fetch('http://localhost:5000/TransportProvider/'+this.props.match.params.id)
            .then(res => res.json())
            .then(provider =>
                this.setState({ providers:provider.data })

            )
            .catch(error => {

                this.setState({error: true});
            });

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

        // let img =(
        //
        //     if (this.state.providers.typesOfVehicle==="Car"){
        //         <img src={Logo1} alt=""/>
        //     }else if(this.state.providers.typesOfVehicle==="Van"){
        //         <img src={Logo2} alt=""/>
        //     }
        //
        // )



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
                                    ( this.state.providers.typesOfVehicle === 'Car')
                                        ? <img src={Logo1} alt=""/>
                                        :''
                                }
                                {
                                    ( this.state.providers.typesOfVehicle === 'Van')
                                        ? <img src={Logo2} alt=""/>
                                        :''
                                }
                                {
                                    ( this.state.providers.typesOfVehicle === 'Suv')
                                        ? <img src={Logo3} alt=""/>
                                        :''
                                }
                                {
                                ( this.state.providers.typesOfVehicle === 'Bus')
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
                                    {this.state.providers.typesOfVehicle}
                                </div>

                                    </div>
                            </div>
                        </span>

                                <span className="lead">
                            <div className="row">
                                <div className="col text-center alert alert-dark">Price Per Day</div>
                                <div className="col">
                                        <div className="alert alert-secondary" role="alert">
                                      {this.state.providers.costPerDay}
                                </div>
                                  </div>
                            </div>

                        </span>




                            <span className="lead">
                            <div className="row">
                                <div className="col text-center alert alert-dark">TP :</div>
                                <div className="col">
                                        <div className="alert alert-secondary" role="alert">
                                   {this.state.providers.phoneNumber}
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
                                <button type="button" className="btn btn-primary ">Book Now</button>
                            </div>
                        </div>
                    </div>

                </div>
        )

    }
}


export default Listitemdetails;
