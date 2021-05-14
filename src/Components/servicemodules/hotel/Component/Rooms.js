import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import _ from "lodash";
import RoomItem from './RoomItem';
import RoomFilter from '../Component/Filter/RoomFilter';


import './Rooms.css';
import { SettingsSystemDaydreamSharp } from '@material-ui/icons';

import connect from "react-redux/es/connect/connect";


const Rooms = (props) => {
    const { district, check_in, check_out, capacity, pricerange_filter, stars_filter } = props;

    // let district = props.location.data.district;
    // let checkIn = props.location.data.checkIn;
    // let checkOut = props.location.data.checkOut;
    // let capacity = props.location.data.numofguests;

    const [rooms, setRooms] = useState([]);
    const [search, setSearch] = useState('');
    const [price, setPrice] = useState('');
    const [star, setStar] = useState('');

    useEffect(() => {
        Axios
            .get('https://alphax-api.azurewebsites.net/api/hotelsservices/Res?arrival='+check_in+'&&departure='+check_out+'&&capacity='+capacity)
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

    // useEffect(() => {
    //     Axios
    //         .get('https://alphax-api.azurewebsites.net/api/hotelsservices/Res?arrival='+props.check_in+'&&departure='+props.check_out+'&&capacity='+props.capacity)
    //         .then((responseData) => {
    //             console.log(responseData);
    //             setRooms(responseData.data);
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })


    // },
    //     []
    // );

    const filterRooms = rooms.filter(room => room.district.toLowerCase() === district.toLowerCase() && room.capacity >= capacity)

    const filterByPriceRange = filterRooms.filter(room =>{
        if(pricerange_filter === null || pricerange_filter === "All"){
            return filterRooms;
        }else if(pricerange_filter === "15000-"){
            return room.pricePerDay <= 15000
        }else{
            return room.pricePerDay > 15000
        }
    })

    const filterByStars = filterByPriceRange.filter(room=>{
        if(stars_filter === null || stars_filter === "All"){
            return filterByPriceRange;
        }else if(stars_filter === "1"){
            return room.stars == 1
        }else if(stars_filter === "2"){
            return room.stars == 2
        }else if(stars_filter === "3"){
            return room.stars == 3
        }else if(stars_filter === "4"){
            return room.stars == 4
        }else{
            return room.stars == 5
        }
    })

    // const filterByStars = filterByPriceRange.filter(room =>{
    //     if(stars_filter === null){
    //         return filterByPriceRange;
    //     }else{
    //         return room.stars.includes(stars_filter);
    //     }
    // })


    const roomItemComponent = () => {
        return filterByStars.map((room) => {
            return (
                <div>
                    <RoomItem
                        id={room.id}
                        name={room.name}
                        roomType={room.roomType}
                        capacity={room.capacity}
                        features={room.features}
                        pricePerDay={room.pricePerDay}
                        stars={room.stars}
                    />
                </div>
            );
        });
    }

    const handlePrice = (event) =>{
        setPrice(event.target.value);
        console.log("price : "+event.target.value)
    }

    const handleStars = (event) => {
        setStar(event.target.value);
        console.log("stars :"+event.target.value)
    }

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-3">
                    <RoomFilter></RoomFilter>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    {roomItemComponent()}
                </div>
                <div className="col-1"></div>
            </div>
            <br/>
        </div>
        

    );
}

const mapStateToProps = (state) => {
    return {

        district: state.hotel_input_reducer.district,
        check_in: state.hotel_input_reducer.check_in,
        check_out: state.hotel_input_reducer.check_out,
        capacity: state.hotel_input_reducer.capacity,
        pricerange_filter: state.hotel_input_reducer.pricerange_filter,
        stars_filter: state.hotel_input_reducer.stars_filter,


    };
};

const mapDispatchToProps = dispatch => {
    return {
        //

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);