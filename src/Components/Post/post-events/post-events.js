  
import React,{ Component } from 'react';

import ImageUploader from 'react-images-upload';
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import { storage } from "../../../../src/config/firebaseConfig";
import { connect } from "react-redux";

class PostTproviderForm extends Component{
    constructor(props) {
        super(props)
        this.state = {

                name: '',
                businessName: '',
                price: '',
                pricePerKid: '',
                adultTickets: 0,
                kidTickets: 0,
                venue: '',
                district: '',
                date: '',
                time: '',
                eventType:'',
                audience:'All',
                frequency:'All',
                otherDetails:'',
                imgURL:'',
                imgURL02:'',
                imgURL03 :'',
                userID :props.userid,


               
               



            pictures: [],

            image:null,
            image1:null,
            image2:null,
            url:'',
            url1:'',
            url2:'',
         
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
    handleChange1 = e => {
        if (e.target.files[0]) {
            this.setState({image1:e.target.files[0]});
        }

    };
    handleChange2 = e => {
        if (e.target.files[0]) {
            this.setState({image2:e.target.files[0]});
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
                    .then((url0) => {
                        this.setState({url:url0});
                        this.setState({progressx:true});
                        
                    });
        
                 
                  
                    
            }
            
        );


        const uploadTask1 = storage.ref(`images/${this.state.image1.name}`).put(this.state.image1);
        uploadTask1.on(
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
                    .child(this.state.image1.name)
                    .getDownloadURL()
                    .then((url) => {
                        this.setState({url1:url});
                        this.setState({progressx:true});
                        
                    });
             
            
                 
                 
                  
                    
            }
            
        );
        const uploadTask2 = storage.ref(`images/${this.state.image2.name}`).put(this.state.image2);
        uploadTask2.on(
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
                    .child(this.state.image2.name)
                    .getDownloadURL()
                    .then((url) => {
                        this.setState({url2:url});
                        this.setState({progressx:true});
                        
                    });
                

                 
                 
                  
                    
            }
            
        );
if(this.state.progressx===true){

}
        setTimeout(function() { //Start the timer
            axios
                .post('https://alphax-api.azurewebsites.net/api/eventplannerservices/', {
                 
                    name: this.state.name,
                    businessName:this.state.businessName,
                    price:parseInt(this.state.price),
                    pricePerKid:parseInt(this.state.pricePerKid),
                    adultTickets: this.state.adultTickets,
                    kidTickets: this.state.kidTickets,
                    venue:this.state.venue,
                    district:this.state.district,
                    date: new Date(),
                    time: this.state.time,
                    eventType:this.state.eventType,
                    audience:this.state.audience,
                    otherDetails:this.state.otherDetails,
                    frequency:this.state.frequency,
                    imgURL:this.state.url,
                    imgURL02:this.state.url1,
                    imgURL03 :this.state.url2,
                    userID:this.props.userid,

                })
                .then(response => {
                    console.log(response)
                    alert("Your Add is successfully posted");
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
                                <input type="Text" className="form-control" id="businessName" name="businessName"
                                      value={this.state.businessName} onChange={this.Changehandler}/>
                            </div>
                            <div className="col-sm-3">

                            </div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="name">Name</label>
                                <input type="Text" className="form-control" id=" name" name="name"
                                       value={this.state.name} onChange={this.Changehandler}     />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="name">venue</label>
                                <input type="Text" name="venue" className="form-control" id="venue"
                                       value={this.state.venue} onChange={this.Changehandler}  />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="district">District</label>
                                <input type="text" name="district" className="form-control" id="district"
                                       value={this.state.district} onChange={this.Changehandler}   />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <hr/>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Event type type</label>
                                    <select className="form-control tm-select"  name="eventType" value={this.state.eventType} onChange={this.Changehandler}>
                                        <option value="Beach Party">Beach Party</option>
                                        <option value="Pilgrims Tour">Pilgrims Tour</option>
                                        <option value="Nature">Nature</option>
                                        <option value="Camping">Camping</option>
                                        <option value="Museaum">Museaum</option>
                                        <option value="Culture">Culture & Foods</option>
                                        <option value="Boat Safari">Boat Safari</option>

                                    </select>
                                </div>
                            </div>



                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Audience</label>
                                    <select className="form-control tm-select"  name="audience" value={this.state.audience} onChange={this.Changehandler}>
                                        <option value="All">All</option>
                                        <option value="21+">21+</option>
                                      
                                    </select>
                                </div>
                           
                            </div>



                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Frequency</label>
                                    <select className="form-control tm-select"  name="frequency" value={this.state.frequency} onChange={this.Changehandler}>
                                        <option value="All">All</option>
                                        <option value="week">Only week days</option>
                                        <option value="weekend">Only weekend </option>
                                      
                                    </select>
                                </div>
                           
                            </div>



                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>

                            <div className="col-sm-3"></div>
                        </div>


                        

                








                        <br/>
                    

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="price"> Adult per price</label>
                                <input type="number" className="form-control" name="price"
                                       value={this.state.price} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="price"> Kid Per day</label>
                                <input type="number" className="form-control" name="pricePerKid"
                                       value={this.state.pricePerKid} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="adultTickets"> Adult tickets</label>
                                <input type="number" className="form-control" name="adultTickets"
                                       value={this.state.adultTickets} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="kidTickets"> Kids Tickets</label>
                                <input type="number" className="form-control" name="kidTickets"
                                       value={this.state.kidTickets} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                  
                       
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <label htmlFor="inputEmail4">Time</label>
                                <input type="time" className="form-control" id="time" name="time"
                                    value={this.state.time} onChange={this.Changehandler} />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>


                        <div className="row formmarge">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="otherDetails"
                                          rows="3" value={this.state.otherDetails} onChange={this.Changehandler}></textarea>
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

                            <label htmlFor="image">Upload image 1</label>


                                <input type="file" onChange={this.handleChange} />
                                {/*<button onClick={this.handleUpload}>Upload</button>*/}

                                <br/>
                                <hr/>
                                {/*{this.state.url}*/}
                                <img src={this.state.url || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <br />
                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">

                            <label htmlFor="image">Upload image 2</label>


                                <input type="file" onChange={this.handleChange1} />
                                {/*<button onClick={this.handleUpload}>Upload</button>*/}

                                <br/>
                                <hr/>
                                {/*{this.state.url}*/}
                                <img src={this.state.url1 || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <br></br>

                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">

                            <label htmlFor="image">Upload image 3</label>


                                <input type="file" onChange={this.handleChange2} />
                                {/*<button onClick={this.handleUpload}>Upload</button>*/}

                                <br/>
                                <hr/>
                                {/*{this.state.url}*/}
                                <img src={this.state.url2 || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>


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
const mapStateToProps = (state) => {
    return {
        reservations: state.eventpnl.reservations,
        formdata: state.eventpnl.formdata,
        total: state.eventpnl.total,
        userid:state.auth.userId,
   
    };
};


export default connect(mapStateToProps)(PostTproviderForm);;