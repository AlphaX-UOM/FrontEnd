import React, {Component, useEffect, useState} from 'react';
import './post-tprovider-form.css';
import ImageUploader from 'react-images-upload';
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import {storage} from "../../../../src/config/firebaseConfig";
import Logo1 from "../../../images/vehicle/itemimages/Intermediate.jpg";
import Logo2 from "../../../images/vehicle/slide/v.jpg";
import Logo3 from "../../../images/vehicle/slide/suv.jfif";
import Logo4 from "../../../images/vehicle/slide/Bus.jfif";
import connect from "react-redux/es/connect/connect";


class PostTproviderForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

            name: '',
            district: '',
            telephone: '',
            email: '',
            address: '',
            vehicletype: 'Car',
            brand: '',
            model: '',
            num_seat: '',
            air_con: '',
            costperdistance: '',
            costperday: '',
            description: '',


            pictures: [],

            image: null,
            url: '',
            progressx: false,
            progress: ''


        }

        this.onDrop = this.onDrop.bind(this);

    }

    handleChange = e => {
        if (e.target.files[0]) {
            this.setState({image: e.target.files[0]});
        }

    };


    Changehandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }


    handlehiddenClik = (e) => {
        this.setState({air_con: e.target.checked})

    }
    onDrop = (picture) => {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    handleUpload = () => {
        const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({progress: progress});
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
                        this.setState({url: url});
                        this.setState({progressx: true});
                    });
            }
        );
        if (this.state.progressx === true) {

        }
    };
    handleSubmit = e => {

        e.preventDefault();
        // console.log(this.state)


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
                imgURL:this.state.url,
                UserID: this.props.id

            })
            .then(response => {
                console.log(response)
                alert("Post added");
                this.setState({name:''})
                this.setState({district:''})
                this.setState({telephone:''})
                this.setState({email:''})
                this.setState({address:''})
                this.setState({brand:''})
                this.setState({model:''})
                this.setState({num_seat:''})
                this.setState({airCondition:''})
                this.setState({costperdistance:''})
                this.setState({costperday:''})
                this.setState({description:''})
                this.setState({url:''})
                this.setState({vehicletype:'Car'})

            })
            .catch(error => {
                console.log(error);
                alert('Post adding is failed!')
            })

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
                                       value={this.state.name} onChange={this.Changehandler} required minLength='3'
                                       maxLength='30'/>
                            </div>
                            <div className="col-sm-3">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" name="email"
                                       value={this.state.email} onChange={this.Changehandler} required/>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="Address">Address</label>
                                <input type="Address" name="address" className="form-control" id="Address"
                                       value={this.state.address} onChange={this.Changehandler} required/>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="pnumber">TelePhone</label>
                                <input type="number" name="telephone" className="form-control" id="pnumber"
                                       value={this.state.telephone} onChange={this.Changehandler} required/>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district">District</label>
                                {/*<input type="Text" className="form-control" name="district"*/}
                                {/*value={this.state.district} onChange={this.Changehandler}required />*/}
                                <select className="form-control tm-select" name="district" value={this.state.district}
                                        onChange={this.Changehandler} required>
                                    <option value=""></option>
                                    <option value="Ampara">Ampara</option>
                                    <option value="Anuradhapura">Anuradhapura</option>
                                    <option value="Badulla">Badulla</option>
                                    <option value="Batticaloa">Batticaloa</option>
                                    <option value="Colombo">Colombo</option>
                                    <option value="Galle"> Galle</option>
                                    <option value="Hambantota">Hambantota</option>
                                    <option value="Jaffna">Jaffna</option>
                                    <option value="Kalutara">Kalutara</option>
                                    <option value="Kandy">Kandy</option>
                                    <option value="Kegalle">Kegalle</option>
                                    <option value="Kilinochchi">Kilinochchi</option>
                                    <option value="Kurunegala">Kurunegala</option>
                                    <option value="Mannar">Mannar</option>
                                    <option value="Matale">Matale</option>
                                    <option value="Matara">Matara</option>
                                    <option value="Monaragala">Monaragala</option>
                                    <option value="Mullaitivu">Mullaitivu</option>
                                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                                    <option value="Polonnaruwa">Polonnaruwa</option>
                                    <option value="Puttalam">Puttalam</option>
                                    <option value="Ratnapura">Ratnapura</option>
                                    <option value="Trincomalee">Trincomalee</option>
                                    <option value="Vavuniya">Vavuniya</option>
                                </select>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <hr/>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Vehicle type</label>
                                    <select className="form-control tm-select" name="vehicletype"
                                            value={this.state.vehicletype} onChange={this.Changehandler} required>
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
                            (this.state.vehicletype === 'Car')
                                ?
                                <div className="row formmarge">
                                    <div className="col-sm-3"></div>

                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Brand</label>
                                            <select className="form-control tm-select" name="brand" value={this.state.brand}
                                                    onChange={this.Changehandler} required>
                                                <option value=""></option>
                                                <option value="Audi">Audi</option>
                                                <option value="BMW">BMW</option>
                                                <option value="Fiat">Fiat</option>
                                                <option value="Ford">Ford</option>
                                                <option value="Honda">Honda</option>
                                                <option value="Hyundai">Hyundai</option>
                                                <option value="Kia">Kia</option>
                                                <option value="Lexus">Lexus</option>
                                                <option value="Maruti">Maruti</option>
                                                <option value="Mazda">Mazda</option>
                                                <option value="Mercedes Benz">Mercedes Benz</option>
                                                <option value="Micro">Micro</option>
                                                <option value="Mitsubishi">Mitsubishi</option>
                                                <option value="Nissan">Nissan</option>
                                                <option value="Renault">Renault</option>
                                                <option value="Subaru">Subaru</option>
                                                <option value="Suzuki">Suzuki</option>
                                                <option value="Tata">Tata</option>
                                                <option value="Tesla">Tesla</option>
                                                <option value="Toyota">Toyota</option>
                                                <option value="volvo">volvo</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="">Model</label>
                                            <input type="Text" className="form-control" name="model"
                                                   value={this.state.model} onChange={this.Changehandler}/>
                                            <small>(optional)</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-3"></div>
                                </div>
                                : ''
                        }
                        {
                            (this.state.vehicletype === 'Van')
                                ? <div className="row formmarge">
                                    <div className="col-sm-3"></div>


                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Brand</label>
                                            <select className="form-control tm-select" name="brand" value={this.state.brand}
                                                    onChange={this.Changehandler} required>
                                                <option value=""></option>

                                                <option value="Micro">Micro</option>
                                                <option value="Mazda">Mazda</option>
                                                <option value="Nissan">Nissan</option>
                                                <option value="Toyota">Toyota</option>
                                                <option value="Suzuki">Suzuki</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="">Model</label>
                                            <input type="Text" className="form-control" name="model"
                                                   value={this.state.model} onChange={this.Changehandler}/>
                                            <small>(optional)</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-3"></div>
                                </div>
                                : ''
                        }

                        {
                            (this.state.vehicletype === 'Suv')
                                ? <div className="row formmarge">
                                    <div className="col-sm-3"></div>


                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Brand</label>
                                            <select className="form-control tm-select" name="brand" value={this.state.brand}
                                                    onChange={this.Changehandler} required>
                                                <option value=""></option>
                                                <option value="Audi">Audi</option>
                                                <option value="BMW">BMW</option>
                                                <option value="Fiat">Fiat</option>
                                                <option value="Ford">Ford</option>
                                                <option value="Honda">Honda</option>
                                                <option value="Hyundai">Hyundai</option>
                                                <option value="Kia">Kia</option>
                                                <option value="Land Rover">Land Rover</option>
                                                <option value="Mercedes Benz">Mercedes Benz</option>
                                                <option value="Micro">Micro</option>
                                                <option value="Mitsubishi">Mitsubishi</option>
                                                <option value="Mahendra">Mahendra</option>
                                                <option value="Nissan">Nissan</option>
                                                <option value="Subaru">Subaru</option>
                                                <option value="Suzuki">Suzuki</option>
                                                <option value="Tata">Tata</option>
                                                <option value="Toyota">Toyota</option>
                                                <option value="volvo">volvo</option>
                                                <option value="Other">Other</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="">Model</label>
                                            <input type="Text" className="form-control" name="model"
                                                   value={this.state.model} onChange={this.Changehandler}/>
                                            <small>(optional)</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-3"></div>
                                </div>
                                : ''
                        }

                        {
                            (this.state.vehicletype === 'Bus')
                                ? <div className="row formmarge">
                                    <div className="col-sm-3"></div>


                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Brand</label>
                                            <select className="form-control tm-select" name="brand" value={this.state.brand}
                                                    onChange={this.Changehandler} required>
                                                <option value=""></option>
                                                <option value="Ashoka Leyland">Ashoka Leyland</option>
                                                <option value="Eicher">Eicher</option>
                                                <option value="Hino">Hino</option>
                                                <option value="Izusu">Isuzu</option>
                                                <option value="Kinglong">Kinglong</option>
                                                <option value="Mahendra">Mahendra</option>
                                                <option value="Micro">Micro</option>
                                                <option value="Mitsubishi">Mitsubishi</option>
                                                <option value="Nissan">Nissan</option>
                                                <option value="Tata">Tata</option>
                                                <option value="Toyota">Toyota</option>
                                                <option value="Volvo">Volvo</option>
                                                <option value="Other">Other</option>


                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="">Model</label>
                                            <input type="Text" className="form-control" name="model"
                                                   value={this.state.model} onChange={this.Changehandler}/>
                                            <small>(optional)</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-3"></div>
                                </div>
                                : ''
                        }


                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6 ">
                                <label htmlFor="district">Number of seats</label>
                                <input type="number" className="form-control" name="num_seat"
                                       value={this.state.num_seat} onChange={this.Changehandler} required max='60'/>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <br/>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input form-group" type="checkbox"
                                           value="true" name=" checkboxval" onChange={e => this.handlehiddenClik(e)}
                                           required/>
                                    <div className="input-group-prepend">
                                        <label className="form-group "><p>Air Condition</p></label>
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
                                       value={this.state.costperdistance} onChange={this.Changehandler} min='0' max='100'
                                       required/>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district"> Cost Per day</label>
                                <input type="number" className="form-control" name="costperday"
                                       value={this.state.costperday} onChange={this.Changehandler} min='0' max='50000' required/>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                              name="description"
                                              rows="3" value={this.state.description} onChange={this.Changehandler} required
                                              maxLength='200'></textarea>
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


                                <input type="file" onChange={this.handleChange} required/>
                                {/*<button onClick={this.handleUpload}>Upload</button>*/}
                                <button type="button" className="btn btn-secondary"
                                        onClick={this.handleUpload}>Upload
                                </button>
                                <br/>
                                <hr/>
                                {/*{this.state.url}*/}
                                <img src={this.state.url || "http://via.placeholder.com/300"} alt="firebase-image"
                                     className="imgsize" required/>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <br/>


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

const mapStateToProps = (state) => {
    return {
        items: state.onlineStoreApp.items,
        isAuthenticated: state.auth.token !== null,
        role: state.auth.role,
        id: state.auth.userId

    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostTproviderForm);