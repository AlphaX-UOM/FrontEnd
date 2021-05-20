import React, { Component } from 'react';
import './post-hotels.css';

import ImageUploader from 'react-images-upload';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { storage } from "../../../../src/config/firebaseConfig";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ListItemAvatar } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import HomeIcon from '@material-ui/icons/Home';
import HotelIcon from '@material-ui/icons/Hotel';
import StarRateIcon from '@material-ui/icons/StarRate';

import HotelImgUp from './hotel_img_up';
import RoomImgUp from './room_img_up';

import connect from "react-redux/es/connect/connect";


class PostHotelForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

            name: '',
            addressLine01: '',
            addressLine02: '',
            pricePerDay: '',
            district: '',
            pnumber: '',
            contactName: '',
            altPnumber: '',
            languages: '',
            roomType: '',
            numOfRooms: '',
            bedType: '',
            capacity: '',
            stars: '',
            features: '',
            amenities: '',
            otherDetails: '',
            hotelImgURL: '',
            roomImgURL01: '',
            roomImgURL02: '',
            roomImgURL03: '',
            userID: props.userid,


            pictures: [],

            image: null,
            image1: null,
            image2: null,
            image3: null,
            url: '',
            url1: '',
            url2: '',
            url3: '',

            progressx: false,
            progress: ''
        }

        this.onDrop = this.onDrop.bind(this);

    }


    Changehandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }

    handleChange = e => {
        if (e.target.files[0]) {
            this.setState({ image: e.target.files[0] });
        }
    };

    handleChange1 = e => {
        if (e.target.files[0]) {
            this.setState({ image1: e.target.files[0] });
        }
    };

    handleChange2 = e => {
        if (e.target.files[0]) {
            this.setState({ image2: e.target.files[0] });
        }
    };

    handleChange3 = e => {
        if (e.target.files[0]) {
            this.setState({ image3: e.target.files[0] });
        }
    };

    handleUpload = () => {

    };

    handlehiddenClik(e) {
        this.setState({ air_con: e.target.checked })

    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }


    handleSubmit = e => {

        e.preventDefault();
        console.log(this.state)
        console.log("post" + this.props.imgurl)

        // const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        // uploadTask.on(
        //     "state_changed",
        //     snapshot => {
        //         const progress = Math.round(
        //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //         );
        //         this.setState({ progress: progress });
        //     },
        //     error => {
        //         console.log(error);
        //     },
        //     () => {
        //         storage
        //             .ref(`images`)
        //             .child(this.state.image.name)
        //             .getDownloadURL()
        //             .then((url0) => {
        //                 this.setState({ url: url0 });
        //                 this.setState({ progressx: true });

        //             });
        //     }
        // );

        // const uploadTask1 = storage.ref(`images/${this.state.image1.name}`).put(this.state.image1);
        // uploadTask1.on(
        //     "state_changed",
        //     snapshot => {
        //         const progress = Math.round(
        //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //         );
        //         this.setState({ progress: progress});
        //     },
        //     error => {
        //         console.log(error);
        //     },
        //     () => {
        //         storage
        //             .ref(`images`)
        //             .child(this.state.image1.name)
        //             .getDownloadURL()
        //             .then((url1) => {
        //                 this.setState({url1:url1});
        //                 this.setState({progressx:true});                        
        //             });                    
        //     }            
        // );

        // const uploadTask2 = storage.ref(`images/${this.state.image2.name}`).put(this.state.image2);
        // uploadTask2.on(
        //     "state_changed",
        //     snapshot => {
        //         const progress = Math.round(
        //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //         );
        //         this.setState({ progress: progress});
        //     },
        //     error => {
        //         console.log(error);
        //     },
        //     () => {
        //         storage
        //             .ref(`images`)
        //             .child(this.state.image2.name)
        //             .getDownloadURL()
        //             .then((url2) => {
        //                 this.setState({url2:url2});
        //                 this.setState({progressx:true});                        
        //             });                   
        //     }            
        // );

        // const uploadTask3 = storage.ref(`images/${this.state.image3.name}`).put(this.state.image3);
        // uploadTask3.on(
        //     "state_changed",
        //     snapshot => {
        //         const progress = Math.round(
        //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //         );
        //         this.setState({ progress: progress});
        //     },
        //     error => {
        //         console.log(error);
        //     },
        //     () => {
        //         storage
        //             .ref(`images`)
        //             .child(this.state.image3.name)
        //             .getDownloadURL()
        //             .then((url3) => {
        //                 this.setState({url3:url3});
        //                 this.setState({progressx:true});                        
        //             });                   
        //     }            
        // );

        if (this.state.progressx === true) {

        }
        setTimeout(function () { //Start the timer
            axios
                .post('https://alphax-api.azurewebsites.net/api/hotelsservices/', {

                    name: this.state.name,
                    addressLine01: this.state.addressLine01,
                    addressLine02: this.state.addressLine02,
                    pricePerDay: parseInt(this.state.pricePerDay),
                    district: this.state.district,
                    pnumber: this.state.pnumber,
                    contactName: this.state.contactName,
                    altPnumber: this.state.altPnumber,
                    languages: this.state.languages,
                    roomType: this.state.roomType,
                    numOfRooms: parseInt(this.state.numOfRooms),
                    bedType: this.state.bedType,
                    capacity: parseInt(this.state.capacity),
                    stars: parseInt(this.state.stars),
                    features: this.state.features,
                    amenities: this.state.amenities,
                    otherDetails: this.state.otherDetails,
                    hotelImgURL: this.props.imgurl,
                    roomImgURL01: this.props.imgurl1,
                    roomImgURL02: this.props.imgurl2,
                    roomImgURL03: this.props.imgurl3,
                    userID: this.props.userid,

                })
                .then(response => {
                    console.log(response)
                    alert("Your Add is successfully posted");
                    this.setState({
                        pricePerDay: '',
                        roomType: '',
                        numOfRooms: '',
                        bedType: '',
                        capacity: '',
                        amenities: '',
                        image1: null,
                        image2: null,
                        image3: null,
                    });
                })
                .catch(error => {
                    console.log(error)
                })
        }.bind(this), 4000)

        console.log(this.props.userid)


    }


    render() {

        return (
            <div className="container-fluid mback">
                <br />


                {/* ///////////////////////////////////////////////// Instruction set ///////////////////////////////////////////////////// */}

                <AppBar position="static" style={{ background: '#69c6ba' }} className="post-hotels-appbar">
                    <Toolbar>

                        <Typography variant="h6" className="post-hotels-text">
                            Please read the following instructions before filling out the form.
                    </Typography>
                        <br />


                    </Toolbar>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <FiberManualRecordIcon style={{ fontSize: "small", color: "black" }} />
                            </ListItemAvatar>
                            <ListItemText className="post-hotels-text">
                                There are two seperate sections to be filled. One for details of hotel and other one for details of rooms.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <FiberManualRecordIcon style={{ fontSize: "small", color: "black" }} />
                            </ListItemAvatar>
                            <ListItemText className="post-hotels-text">
                                First fill out details in the hotel section.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <FiberManualRecordIcon style={{ fontSize: "small", color: "black" }} />
                            </ListItemAvatar>
                            <ListItemText className="post-hotels-text">
                                If you have more than one room type, <br />
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            </ListItemAvatar>
                            <ListItemAvatar>
                            </ListItemAvatar>
                            <ListItemText style={{ fontSize: "small", color: "black" }}>
                                First fill the room details section for first room type and click the subit button.<br />
                            For the second room type and onward change only the details in room section and do not forget to submit before changing once again.
                            </ListItemText>
                        </ListItem>
                    </List>
                </AppBar>
                <br />
                <div className="container ">

                    <form className="fback" onSubmit={this.handleSubmit}>

                        <h1 className="h4 h1style"><strong>Fill in the details</strong></h1>
                        <hr />
                        <List>
                            <ListItem>
                                <div className="col-sm-2">
                                    <ListItemAvatar>
                                        <HomeIcon style={{ fontSize: "60" }} />
                                    </ListItemAvatar>
                                </div>
                                <div className="col-sm-6">
                                    <ListItemText >
                                        <h4><strong> Section 1 - Hotel Details</strong></h4>
                                    </ListItemText>
                                </div>
                            </ListItem>
                        </List>
                        <br />

                        {/* ///////////////////////////////////////////////// Hotel Details ///////////////////////////////////////////////////// */}

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7 ">
                                <label htmlFor="name">Name of your Hotel</label>
                                <input type="Text" className="form-control" id="name" name="name" style={{ fontSize: "medium" }}
                                    value={this.state.name} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <br />

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7">
                                <label htmlFor="stara">Star Rating</label>
                                <select className="form-control tm-select" name="stars" value={this.state.stars} onChange={this.Changehandler} required>
                                    <option value="1">1</option><StarRateIcon />
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <br />

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7">
                                <label htmlFor="address">Location of your hotel</label>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="addressLine01">Address Line 1</label>
                                <input type="text" className="form-control" id="addressLine01" name="addressLine01"
                                    value={this.state.addressLine01} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="addressLine02">Address Line 2</label>
                                <input type="text" className="form-control" id="addressLine02" name="addressLine02"
                                    value={this.state.addressLine02} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district">District</label>
                                <select className="form-control tm-select" name="district" value={this.state.district} onChange={this.Changehandler} required>
                                    <option value="Ampara">Ampara</option>
                                    <option value="Anuradhapura">Anuradhapura</option>
                                    <option value="Badulla">Badulla</option>
                                    <option value="Batticaloa">Batticaloa</option>
                                    <option value="Colombo">Colombo</option>
                                    <option value="Galle">Galle</option>
                                    <option value="Gampaha">Gampaha</option>
                                    <option value="Hambanthota">Hambanthota</option>
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
                                    <option value="Mullativu">Mullativu</option>
                                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                                    <option value="Polonnaruwa">Polonnaruwa</option>
                                    <option value="Puttalam">Puttalam</option>
                                    <option value="Rathnapura">Rathnapura</option>
                                    <option value="Trincomalee">Trincomalee</option>
                                    <option value="Vavuniya">Vavuniya</option>

                                </select>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <br />

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7">
                                <label htmlFor="address">Contact details of your hotel</label>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="contactName">Contact Name</label>
                                <input type="text" name="contactName" className="form-control" id="contactName"
                                    value={this.state.contactName} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>


                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="pnumber">Contact Number</label>
                                <input type="text" name="pnumber" className="form-control" id="pnumber"
                                    value={this.state.pnumber} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <label htmlFor="altPnumber">Alternative Contact Number</label>
                                <input type="text" name="altPnumber" className="form-control" id="altPnumber"
                                    value={this.state.altPnumber} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <br />

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Description </label>
                                    <textarea className="form-control post" id="otherDetails" name="otherDetails"
                                        rows="3" value={this.state.otherDetails} onChange={this.Changehandler} placeholder="A brief description about your hotel to be displayed on your post" required>
                                    </textarea>
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7 ">
                                <label htmlFor="languages">Languages spoken</label>
                                <input type="Text" className="form-control" id="languages" name="languages" style={{ fontSize: "medium" }}
                                    value={this.state.languages} onChange={this.Changehandler} placeholder="Languages your staff can speak ex:English,Chinese,Sinhala" required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <br />

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7 ">
                                <label htmlFor="facilities">Facilities</label>
                                <input type="Text" className="form-control" id="features" name="features" style={{ fontSize: "medium" }}
                                    value={this.state.features} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <br />

                        {/* <div className="row formmarge"> */}
                        {/* <div className="col-sm-1"></div> */}
                        {/* <div className="col-sm-7"> */}

                        {/* <label htmlFor="image">Upload image of the Hotel</label> */}

                        {/* <br />
                                <input type="file" onChange={this.handleChange} required/> */}
                        {/*<button onClick={this.handleUpload}>Upload</button>*/}

                        {/* <br />
                                <hr /> */}
                        {/*{this.state.url}*/}
                        {/* <img src={this.state.url || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" />
                            </div>
                            <div className="col-sm-4"></div>
                        </div> */}

                        <HotelImgUp />



                        <br />


                        {/* ////////////////////////////roomtype details/////////////////////////// */}
                        <hr />
                        <List>
                            <ListItem>
                                <div className="col-sm-2">
                                    <ListItemAvatar>
                                        <HotelIcon style={{ fontSize: "60" }} />
                                    </ListItemAvatar>
                                </div>
                                <div className="col-sm-6">
                                    <ListItemText >
                                        <h4><strong> Section 2 - Room Details</strong></h4>
                                    </ListItemText>
                                </div>
                            </ListItem>
                        </List>

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7">
                                <label htmlFor="roomType">Room type</label>
                                <input type="text" className="form-control" id="roomType" name="roomType"
                                    value={this.state.roomType} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <br />

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7">
                                <label htmlFor="numOfRooms">Number of rooms</label>
                                <input type="text" className="form-control" id="numOfRooms" name="numOfRooms"
                                    value={this.state.numOfRooms} onChange={this.Changehandler} placeholder="of the above type" required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <br />

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7">
                                <label htmlFor="bedType">Kind of beds available in this room type</label>
                                <input type="text" className="form-control" name="bedType" id="bedType"
                                    value={this.state.bedType} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <br />

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7">
                                <label htmlFor="capacity">Number of guest can stay in this room type</label>
                                <input type="text" className="form-control" name="capacity" id="capacity"
                                    value={this.state.capacity} onChange={this.Changehandler} placeholder="capacity of a room" required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <br />

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7">
                                <label htmlFor="pricePerDay">Base price per day</label>
                                <input type="text" className="form-control" name="pricePerDay" id="pricePerDay"
                                    value={this.state.pricePerDay} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <br />

                        <div className="row formmarge">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7">
                                <label htmlFor="amenities">Amenities</label>
                                <input type="text" className="form-control" id="amenities" name="amenities"
                                    value={this.state.amenities} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        {/* <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">

                                <label htmlFor="image1">Upload image 1 of the Room</label>

                                <br />
                                <input type="file" onChange={this.handleChange1} required/> */}
                        {/*<button onClick={this.handleUpload}>Upload</button>*/}

                        {/* <br />
                                <hr /> */}
                        {/*{this.state.url}*/}
                        {/* <img src={this.state.url1 || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" /> */}
                        {/* </div>
                            <div className="col-sm-4"></div>
                        </div> */}

                        {/* <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">

                                <label htmlFor="image2">Upload image 2 of the Room</label>

                                <br />
                                <input type="file" onChange={this.handleChange2} required/> */}
                        {/*<button onClick={this.handleUpload}>Upload</button>*/}

                        {/* <br />
                                <hr /> */}
                        {/*{this.state.url}*/}
                        {/* <img src={this.state.url2 || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" /> */}
                        {/* </div>
                            <div className="col-sm-4"></div>
                        </div> */}

                        {/* <div className="row formmarge">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">

                                <label htmlFor="image3">Upload image 3 of the Room</label>

                                <br />
                                <input type="file" onChange={this.handleChange3} required/> */}
                        {/*<button onClick={this.handleUpload}>Upload</button>*/}

                        {/* <br />
                                <hr /> */}
                        {/*{this.state.url}*/}
                        {/* <img src={this.state.url3 || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" /> */}
                        {/* </div>
                            <div className="col-sm-4"></div>
                        </div> */}


                        <hr />

                        <RoomImgUp />



                        <div className="row formmarge">
                            <div className="col-sm-2">

                            </div>
                            <div className="col-sm-5">

                            </div>
                            <div className="col-sm-5-center">
                                <button className="btn btn-primary" type="submit">Post ad</button>
                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-2">

                            </div>
                            <div className="col-sm-5">

                            </div>
                            <div className="col-sm-5-center">
                                <p style={{ fontSize: "12px" }}>(Please wait for the confirmation message, it will take sometime)</p>
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
        userid: state.auth.userId,
        imgurl: state.hotel_input_reducer.hotel_post_imgUrl,
        imgurl1: state.hotel_input_reducer.hotel_post_imgUrl1,
        imgurl2: state.hotel_input_reducer.hotel_post_imgUrl2,
        imgurl3: state.hotel_input_reducer.hotel_post_imgUrl3,
    };
};

export default connect(mapStateToProps)(PostHotelForm);



