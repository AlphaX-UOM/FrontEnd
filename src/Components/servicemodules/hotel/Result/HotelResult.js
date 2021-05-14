import React, { useEffect, useState } from 'react';
import './HotelResult.css';
import HotelResultItem from './HotelResultItem';
import HotelResultFeatures from './HotelResultFeatures';
import HotelResultContacts from './HotelResultContacts';
import HotelResultComment from './HotelResultComments';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from "lodash";

import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import BedIcon from '@material-ui/icons/KingBed';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ContactIcon from '@material-ui/icons/Contacts';

import { connect } from "react-redux";



const HotelResult = (props) => {

    const { name, checkIn, checkOut, stars } = props;

    console.log("HotelResult" +name);
    console.log("HotelResult" +checkIn);
    console.log("HotelResult" +checkOut);
    console.log("HotelResult" +stars);

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        Axios
            .get('https://alphax-api.azurewebsites.net/api/hotelsservices/Check?arrival='+checkIn+'&&departure='+checkOut)
            .then((responseData) => {
                console.log(responseData);
                setRooms(responseData.data);
            })
            .catch(error => {
                console.log(error)
            })


    },
        []
    );


    // const filterRooms = room.filter(item => {
    //     return item.name === passedname
    // }); room.filter(room => room.name === passedname)

    

    const roomsComponent = () => {
        return rooms.filter(room => room.name === name).map((room) => {
            return (

                <div>
                    <HotelResultItem
                        id={room.id}
                        name={room.name}
                        roomType={room.roomType}
                        capacity={room.capacity}
                        amenities={room.amenities}
                        pricePerDay={room.pricePerDay}
                        numOfRooms={room.numOfRooms}
                        roomImgURL01={room.roomImgURL01}
                        roomImgURL02={room.roomImgURL02}
                        roomImgURL03={room.roomImgURL03}
                        checkIn={checkIn}
                        checkOut={checkOut}
                    />
                </div>
            );
        });
    }

    const commentsComponent = () => {
        return rooms.filter(room => room.name === name).map((room) => {
            return (

                <div>
                    <HotelResultComment
                        id={room.id}
                        name={room.name}
                    />
                </div>
            );
        });       
    }

    let group = rooms.filter((ele, ind) => ind === rooms.findIndex(elem => elem.name === ele.name))

    const roomsFeatures = () => {
        return group.filter(r => r.name === name).map((r)=>{
            return(
                <div>
                    <HotelResultFeatures
                        features={r.features}
                    />                      
                </div>
            );
        });
    }

    const roomsContacts = () => {
        return group.filter(r => r.name === name).map((r)=>{
            return(
                <div>
                    <HotelResultContacts
                        pnumber={r.pnumber}
                        contactName={r.contactName}
                        altPnumber={r.altPnumber}
                    />                      
                </div>
            );
        });
    }

    return (
        <div>
            <br/>
            <div className="container">
            <h3 style={{color:"#0f3221"}}>{name}</h3>
            </div>

            <br />
            <div className="container">

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header className="hotelresult-cardheader">
                            <Accordion.Toggle as={Navbar} variant="light" eventKey="0">
                                <div className="col-1"><BedIcon style={{color:"#FFFFFF"}}/></div>
                                  Select room type for you!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                               
                                
                                <React.Fragment>

                                    <div className="container mt-4">

                                        <ul className="list-group">{roomsComponent()}</ul>

                                    </div>
                                </React.Fragment>
                            </Card.Body>
                            
                            
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <br />
                <Accordion>
                    <Card>
                        <Card.Header className="hotelresult-cardheader">
                            <Accordion.Toggle as={Navbar} variant="light" eventKey="1">
                                <div className="col-1"><RoomServiceIcon style={{color:"#FFFFFF"}}/></div>
                                Facilities
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                {roomsFeatures()}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <br />
                <Accordion>
                    <Card>
                        <Card.Header className="hotelresult-cardheader">
                            <Accordion.Toggle as={Navbar} variant="light" eventKey="2">
                                <div className="col-1"><ContactIcon style={{color:"#FFFFFF"}}/></div>
                                Contact
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                {roomsContacts()}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <br />

            </div>

            <br/>
            <hr/>
            <div className="container">
                {commentsComponent()}
            </div>

        </div>
    );

}

const mapStateToProps = (state) => {
    return {

        name: state.hotel_input_reducer.name,
        checkIn: state.hotel_input_reducer.checkIn,
        checkOut: state.hotel_input_reducer.checkOut,
        stars: state.hotel_input_reducer.stars,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HotelResult);

/*class Result extends Component{

    state = {  roomtypes :[],
        loading: false

    }




    componentDidMount = () => {
        this.setState({loading: true});
        fetch('https://localhost:44305/api/roomtype/'+this.props.match.params.id)
        .then(res => res.json())
        .then((responseData) =>{
           this.setState({roomtypes: responseData.data});
           console.log(responseData);
           this.setState({loading: false})
            })
        .catch(error => {
            this.setState({error: true})
            console.log(error);
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


    render(){


        return (
            <div>
              <div>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th className="tableName">Room Name</th>
                    <th className="tableBeds">Number of Beds</th>
                    <th className="tableGuests">Number of Guests</th>
                    <th className="tableSpecs">Specs</th>
                    <th className="tablePrice">Price Per Day</th>
                    <th className="tableInput">Num. of Rooms</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.roomtypes.hotelId}</td>
                    <td>{this.state.roomtypes.numofBeds}</td>
                    <td>{this.state.roomtypes.numofGuests}</td>
                    <td>{this.state.roomtypes.specs}</td>
                    <td>{this.state.roomtypes.pricePerDay}</td>
                    <td><input type="number" min="0" className="form-control button-room" aria-label="Username" aria-describedby="basic-addon1" /></td>
                </tr>
            </tbody>
        </Table>
    </div>


    <br />

    <div className="text-center">
        <button type="button" className="btn btn btn-secondary">Reserve Rooms</button>
    </div>
            </div>
        )
    }

}




export default Result;
*/


//////////////////////////////////////////////////////////////////

/*componentDidMount =() =>{
    fetch('https://localhost:44370/api/roomtype')

        .then((responseData) => {
            console.log(responseData);
            this.setState({roomtypes: responseData});
        })
        .catch(error => {
            console.log(error)
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
*/


/*let hotelId = props.useLocation.hotelId;

        const [rooms, setRooms] = useState([]);

        const [search, setSearch] = useState('');




        const filterRooms=rooms.filter(item=>{
            return item.includes(hotelId)
           })

           const roomsComponent = () => {
            return filterRooms.map((room) => {
                return (
                    <div>
                        <ResultList
                            Name={room.Name}
                            NumofBeds={room.NumofBeds}
                            NumofGuests={room.NumofGuests}
                            Specs={room.Specs}
                            pricePerDay={room.pricePerDay}
                        />
                    </div>
                );
            });
        }



        <ResultList
                                key={roomtype.hotelId}
                                hotelId={roomtype.hotelId}
                                typeId={roomtype.typeId}
                                Name={roomtype.name}
                                numofBeds={roomtype.numofBeds}
                                numofGuests={roomtype.numofGuests}
                                specs={roomtype.specs}
                                pricePerDay={roomtype.pricePerDay}
                            />





                            return (
            <div>
                <br />
                <br />
                <div className="container">
                    <div className="img">
                    </div>
                    <br />
                    <div className="text-center">
                        <h3>Select Room Type</h3>
                    </div>
                    <h3>Hotel Name:</h3>
                </div>

                <div className="container details-hotel">
                    <p>District:{props.hotelId}</p>
                    <p>Address: </p>
                    <p>Contact: </p>
                    <p>Stars: </p>
                    <button onClick={checkdata()}>click</button>
                </div>

                <br />

                <React.Fragment>

                <ul className="list-group">{roomtypeItem()}</ul>



      </React.Fragment>

            </div>

        );

        */
