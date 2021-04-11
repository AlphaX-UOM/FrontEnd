import React,{ Component } from 'react';
import './post-tprovider-form.css';
import ImageUploader from 'react-images-upload';
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import { storage } from "../../../../src/config/firebaseConfig";
import Logo1 from "../../../images/vehicle/itemimages/Intermediate.jpg";
import Logo2 from "../../../images/vehicle/slide/v.jpg";
import Logo3 from "../../../images/vehicle/slide/suv.jfif";
import Logo4 from "../../../images/vehicle/slide/Bus.jfif";

class PostTproviderForm extends Component{
    constructor(props) {
        super(props)
        this.state = {

                name: '',
                district: '',
                telephone: '',
                email: '',
                address: '',
                vehicletype: 'Car',
                brand:'',
                model:'',
                num_seat:'',
                air_con:'',
                costperdistance: '',
                costperday: '',
                description: '',



            pictures: [],

            image:null,
            url:'',
            progressx:false,
            progress:''





        }

        this.onDrop = this.onDrop.bind(this);

    }

    handleChange = e => {
        if (e.target.files[0]) {
            this.setState({image:e.target.files[0]});
        }

    };

     handleUpload = () => {

    };

    Changehandler = (event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }


    handlehiddenClik(e) {
        this.setState( {air_con: e.target.checked} )

    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }


    handleSubmit = e=>{

        e.preventDefault();
        console.log(this.state)

        const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress: progress});
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref(`images`)
                    .child(this.state.image.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({url:url});
                        this.setState({progressx:true});
                    });
            }
        );
if(this.state.progressx===true){

}
        setTimeout(function() { //Start the timer
            axios
                .post('https://alphax-api.azurewebsites.net/api/TransportServices', {
                    name:this.state.name,
                    district:this.state.district,
                    pnumber:this.state.telephone,
                    email:this.state.email,
                    address:this.state.address,
                    vehicleType:this.state.vehicletype,
                    brand:this.state.brand,
                    model:this.state.model,
                    noOfSeats:this.state.num_seat,
                    airCondition:this.state.air_con,
                    pricePer1KM:parseInt(this.state.costperdistance),
                    pricePerDay:parseInt(this.state.costperday),
                    description:this.state.description,
                    imgURL:this.state.url

                })
                .then(response => {
                    console.log(response)
                    alert("Post added");

                })
                .catch(error => {
                    console.log(error)
                })
        }.bind(this), 4000)




    }

    render() {

        return (
            <div className="container-fluid mback">
                <br/>
                <div className="container ">

                    <form className="fback" onSubmit={this.handleSubmit}>

                        <h1 className="h4 h1style"><strong>Fill in the details</strong></h1>
                        <hr/>
                        <div className="row formmarge">
                            <div className="col-sm-3">

                            </div>
                            <div className="col-sm-6 ">
                                <label htmlFor="name">Business Name</label>
                                <input type="Text" className="form-control" id="name" name="name"
                                      value={this.state.name} onChange={this.Changehandler} required/>
                            </div>
                            <div className="col-sm-3">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" name="email"
                                       value={this.state.email} onChange={this.Changehandler}  required   />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="Address">Address</label>
                                <input type="Address" name="address" className="form-control" id="Address"
                                       value={this.state.address} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="pnumber">TelePhone</label>
                                <input type="number" name="telephone" className="form-control" id="pnumber"
                                       value={this.state.telephone} onChange={this.Changehandler} required  />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district">District</label>
                                <input type="Text" className="form-control" name="district"
                                       value={this.state.district} onChange={this.Changehandler}required />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <hr/>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Vehicle type</label>
                                    <select className="form-control tm-select"  name="vehicletype" value={this.state.vehicletype} onChange={this.Changehandler} required>
                                        <option value="Car">Car</option>
                                        <option value="Van">Van</option>
                                        <option value="Suv">Suv</option>
                                        <option value="Bus">Bus</option>

                                    </select>
                                </div>
                            </div>



                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>

                            <div className="col-sm-3"></div>
                        </div>


                            {
                                ( this.state.vehicletype === 'Car')
                                    ?
                                    <div className="row formmarge">
                                        <div className="col-sm-3"></div>

                                        <div className="col-sm-3">
                                            <div className="form-group" >
                                                <label htmlFor="exampleFormControlSelect1">Brand</label>
                                                <select className="form-control tm-select"  name="brand" value={this.state.brand} onChange={this.Changehandler} required>
                                                    <option value=""></option>
                                                    <option value="Toyota">Toyota</option>


                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label htmlFor="">Model</label>
                                                <input type="Text" className="form-control" name="model"
                                                       value={this.state.model} onChange={this.Changehandler} />
                                                <small>(optional)</small>
                                            </div>
                                        </div>
                                        <div className="col-sm-3"></div>
                                    </div>
                                    :''
                            }
                            {
                                ( this.state.vehicletype === 'Van')
                                    ?  <div className="row formmarge">
                                        <div className="col-sm-3"></div>


                                        <div className="col-sm-3">
                                            <div className="form-group" >
                                                <label htmlFor="exampleFormControlSelect1">Brand</label>
                                                <select className="form-control tm-select"  name="brand" value={this.state.brand} onChange={this.Changehandler} required >
                                                    <option value=""></option>
                                                    <option value="Nissan">Nissan</option>

                                                    <option value="Toyota">Toyota</option>


                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <label htmlFor="">Model</label>
                                                <input type="Text" className="form-control" name="model"
                                                       value={this.state.model} onChange={this.Changehandler} />
                                                <small>(optional)</small>
                                            </div>
                                        </div>
                                        <div className="col-sm-3"></div>
                                    </div>
                                    :''
                            }

                        {
                            ( this.state.vehicletype === 'Suv')
                                ?  <div className="row formmarge">
                                    <div className="col-sm-3"></div>


                                    <div className="col-sm-3">
                                        <div className="form-group" >
                                            <label htmlFor="exampleFormControlSelect1">Brand</label>
                                            <select className="form-control tm-select"  name="brand" value={this.state.brand} onChange={this.Changehandler} required>
                                                <option value=""></option>
                                                <option value="Nissan">Nissan</option>


                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="">Model</label>
                                            <input type="Text" className="form-control" name="model"
                                                   value={this.state.model} onChange={this.Changehandler} />
                                            <small>(optional)</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-3"></div>
                                </div>
                                :''
                        }

                        {
                            ( this.state.vehicletype === 'Bus')
                                ?  <div className="row formmarge">
                                    <div className="col-sm-3"></div>


                                    <div className="col-sm-3">
                                        <div className="form-group" >
                                            <label htmlFor="exampleFormControlSelect1">Brand</label>
                                            <select className="form-control tm-select"  name="brand" value={this.state.brand} onChange={this.Changehandler} required >
                                                <option value=""></option>
                                                <option value="Toyota">Toyota</option>


                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="">Model</label>
                                            <input type="Text" className="form-control" name="model"
                                                   value={this.state.model} onChange={this.Changehandler} />
                                            <small>(optional)</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-3"></div>
                                </div>
                                :''
                        }







                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6 ">
                                <label htmlFor="district">Number of seats</label>
                                <input type="number" className="form-control" name="num_seat"
                                       value={this.state.num_seat} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <br/>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input form-group" type="checkbox"
                                           value="true" name=" checkboxval"   onChange = {e=>this.handlehiddenClik(e)} required />
                                    <div className="input-group-prepend">
                                        <label className="form-group "><p >Air Condition</p> </label>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district"> Cost Per 1 km</label>
                                <input type="number" className="form-control" name="costperdistance"
                                       value={this.state.costperdistance} onChange={this.Changehandler} max='100' required/>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district"> Cost Per day</label>
                                <input type="number" className="form-control" name="costperday"
                                       value={this.state.costperday} onChange={this.Changehandler} max='50000' required />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="description"
                                          rows="3" value={this.state.description} onChange={this.Changehandler} required></textarea>
                            </div>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>


                        {/*<div className="row formmarge">*/}
                            {/*<div className="col-sm-3"></div>*/}
                            {/*<div className="col-sm-6">*/}




                                {/*<ImageUploader*/}
                                    {/*withIcon={true}*/}
                                    {/*buttonText='Choose images'*/}
                                    {/*onChange={this.onDrop}*/}
                                    {/*imgExtension={['.jpg', '.gif', '.png', '.gif','.jpeg']}*/}
                                    {/*maxFileSize={5242880}*/}
                                    {/*withPreview={true}*/}
                                {/*/>*/}
                            {/*</div>*/}
                            {/*<div className="col-sm-3"></div>*/}
                        {/*</div>*/}

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">




                                <input type="file" onChange={this.handleChange} />
                                {/*<button onClick={this.handleUpload}>Upload</button>*/}

                                <br/>
                                <hr/>
                                {/*{this.state.url}*/}
                                <img src={this.state.url || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" required />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <br />


                        {/*<div className="row formmarge">*/}
                            {/*<div className="col-sm-2">*/}
                                {/*<div className="form-check form-check-inline">*/}
                                {/*<input className="form-check-input" type="checkbox" id="inlineCheckbox1"*/}
                                {/*value="Car" name=" checkboxval"    onClick = {this.handlecarClik.bind(this)}/>*/}
                                {/*<label className="form-check-label" htmlFor="inlineCheckbox1">Car</label>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-sm-4">*/}
                                {/*<div className="col-sm">*/}
                                    {/*<div className="form-group">*/}

                                        {/*<select className="form-control tm-select" id="exampleFormControlSelect1"  name="carvalue" value={this.state.carvalue} onChange={this.Changehandler} disabled = {(!this.state.disabled1)? "disabled" : ""} >*/}
                                            {/*<option value="Car">Car</option>*/}


                                        {/*</select>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-sm-2 form-group">*/}
                                {/*<input type="Number" className="form-control" name="carcount" placeholder="No.Vehicles" value={this.state.carcount} onChange={this.Changehandler}  hidden = {(!this.state.disabled1)? "hidden" : ""}/>*/}
                            {/*</div>*/}
                            {/*<div className="col-sm-2 form-group">*/}
                                {/*<input type="number" className="form-control" name="carcostperday" placeholder="Price Per Day" value={this.state.carcostperday} onChange={this.Changehandler} disabled = {(!this.state.disabled1)? "disabled" : ""}/>*/}
                            {/*</div>*/}
                            {/*<div className="col-sm-2">*/}

                            {/*</div>*/}
                        {/*</div>*/}



                        <hr/>

                        <div className="row formmarge">
                            <div className="col-sm-5">

                            </div>
                            <div className="col-sm-5">

                            </div>
                            <div className="col-sm-2-center">
                                <button className="btn btn-primary" type="submit">Post ad</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }

};

export default PostTproviderForm;