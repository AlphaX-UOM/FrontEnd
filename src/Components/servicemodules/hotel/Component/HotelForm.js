import React, { useState } from 'react';
import './HotelForm.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';

import connect from "react-redux/es/connect/connect";
import * as actions from '../../../../store/actions/index';

const HotelForm = (props) => {
    const { hotel_input_form } = props;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    
    const [district, setDistrict] = useState('x');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numofguests,setNumofGuests] = useState();

  

    const handleDistrict = (event) =>{
        setDistrict(event.target.value);
        console.log("destination : "+event.target.value)
    }

    const handleCheckin = (event) =>{
        setCheckIn(event.target.value);
        console.log("checkIn : "+event.target.value)
    }
  
    const handleCheckout = (event) =>{
        setCheckOut(event.target.value);
        console.log("checkOut : "+event.target.value)
    }

    const handleNumofGuests = (event) =>{
        setNumofGuests(event.target.value);
        console.log("numofguests : "+event.target.value)
    }

    const [path, setPath] = useState();

    const SimpleDialog = (props) => {

        const { onClose, open } = props;


        const handleListItemClick = () => {
            onClose();
        };

        return (
            <Dialog aria-labelledby="simple-dialog-title" open={open}>
                <DialogContentText id="alert-dialog-description" style={{padding:"10px"}}>
                    Please fill all the required details.
            </DialogContentText>


                <Button onClick={() => handleListItemClick()} color="primary">
                    ok
                </Button>


            </Dialog>
        );
    }



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        if (checkIn == '' || checkOut == '' || district == '' || numofguests == '') {
            setOpen(true);
        } else {
            setPath('./rooms');
        }

    };

    const handleClose = () => {
        setOpen(false);
    };
    
    // const handleSubmit = () =>{
    //     props.hotel_input_form(district, checkIn, checkOut, numofguests);
    // }

    
        let formData = {
            district: district,
            checkIn: checkIn,
            checkOut: checkOut,
            numofguests: numofguests, 
          };

         
           
    return (
        <div>
            



            <section className="tm-banner">
                <div className="tm-container-outer tm-banner-bg-hotel">
                    <div className="container">

                        <div className="row tm-banner-row" id="tm-section-search">
                            <form className="tm_search_form_hotel tm-section-pad-2" >

                                <div className="form-row tm-search-form-row">

                                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-2-hotel">

                                            <label htmlFor="inputRoom" className="tm_form_label_search_hotel" >District</label>
                                            <input
                                                name="destination"
                                                type="text"
                                                className="form-control"
                                                id="inputCheckOut"
                                                placeholder="Where are you going?"
                                                onChange={handleDistrict}
                                                required
                                            />


                                    </div>

                                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-2-hotel">
                                        <label htmlFor="inputCheckIn" className="tm-form-label-search" >Check In </label>
                                        <input
                                            name="check-in"
                                            type="date"
                                            className="form-control"
                                            id="inputCheckIn"
                                            placeholder="Check In"
                                            onChange={handleCheckin}
                                            min={today}
                                            required
                                        />
                                    </div>
                                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-2-hotel">
                                        <label className="tm-form-label-search-hotel" htmlFor="inputCheckOut">Check Out </label>
                                        <input
                                            name="check-out"
                                            type="date"
                                            className="form-control"
                                            id="inputCheckOut"
                                            placeholder="Check Out"
                                            onChange={handleCheckout} min={checkIn}
                                            required
                                        />
                                    </div>


                                        <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3-hotel">
                                            <label htmlFor="inputRoom" className="tm-form-label-search-hotel">Guests</label>
                                            <input
                                                name="check-out"
                                                type="number"
                                                className="form-control"
                                                id="inputCheckOut"
                                                min="0"
                                                placeholder="0"
                                                onChange={handleNumofGuests} min="0"
                                                required
                                            />
                                        </div>




                                    <div className="form-group tm-form-group tm-form-group-pad-btn-hotel tm-form-group-5-hotel">

                                        <Link
                                            type="submit"
                                            to={{ pathname:path ,data:formData}}
                                            className="btn btn-primary tm-btn-hotel tm-btn-search-hotel text-uppercase "
                                            id="btnSubmit"
                                            
                                        >
                                            <Button onClick={() => {
                                                hotel_input_form(district,checkIn,checkOut,numofguests);
                                                handleClickOpen();
                                            } }>
                                            <SearchIcon/>
                                            </Button>
                                            <SimpleDialog open={open} onClose={handleClose} />
                                        </Link>

                                    </div>

                                </div>


                            </form>

                            <div className="container b1-hotel">
                                <Link type="submit"
                                            to={{ pathname: "/hotelList" }}
                                            className="btn btn-primary tm-btn-hotel tm-btn-search-hotel text-uppercase "
                                            id="btnSubmit">
                                <Button >Click here to view Available Hotels</Button>
                                
                                </Link>
                            
                            </div>


                        </div>

                        <div className="row tm-banner-row tm-banner-row-header">
                            <div className="col-xs-12">
                                <div className="tm-banner-header">

                                </div>
                            </div>
                        </div>


                        <div className="tm-banner-overlay"></div>

                    </div>
                </div>

            </section>

        </div>
    );

    }

    const mapStateToProps = (state) => {
        return {
            // items: state.onlineStoreApp.items
        }
    }
    
    const mapDispatchToProps = (dispatch) => {
        return {
            hotel_input_form:  (district, check_in, check_out, capacity) => {
                 dispatch(actions.get_hotel_input_form(district, check_in, check_out, capacity));
                },
        };
    };
    
    export default connect(mapStateToProps,mapDispatchToProps)(HotelForm);





   


    

    /*searchSpace = (event) => {
        let keyword = event.target.value;
        setState({ search: keyword });

        if (state.search == null)
            setState({ itemsToDisplay: [...state.itemsToUse] });
        else {
            let itemsToDisplay = [];
            itemsToDisplay = state.itemsToUse.filter((item) =>
                item["Name"].toLowerCase().includes(state.search.toLowerCase())
            );
            setState({ itemsToDisplay });
        }
    };*/







            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
                {/*<div className="container-fluid form-hotel">*/}
                    {/*<div className="row" style={{ padding: "100px" }}>*/}
                        {/*<div className="col-lg-12">*/}
                            {/*<div className="input-group mb-3">*/}
                                {/*<div className="input-group-prepend">*/}
                                    {/*<span className="input-group-text">Hotel / Destination</span>*/}
                                {/*</div>*/}
                                {/*<input type="text" aria-label="First name" className="form-control" />*/}

                            {/*</div>*/}

                        {/*</div>*/}

                        {/*<div className="col-lg-1"></div>*/}
                        {/*<div className="col-lg-5">*/}
                            {/*<div className="input-group mb-3">*/}
                                {/*<div className="input-group-prepend">*/}
                                    {/*<span className="input-group-text">Check In</span>*/}
                                {/*</div>*/}
                                {/*<input type="date" aria-label="First name" className="form-control"/>*/}

                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-5">*/}
                            {/*<div className="input-group mb-3">*/}
                                {/*<div className="input-group-prepend">*/}
                                    {/*<span className="input-group-text">Check Out</span>*/}
                                {/*</div>*/}
                                {/*<input type="date" aria-label="First name" className="form-control"/>*/}

                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-1"></div>*/}

                        {/*<div className="col-lg-1"></div>*/}
                        {/*<div className="col-lg-5">*/}
                            {/*<div className="input-group mb-3">*/}
                                {/*<div className="input-group-prepend">*/}
                                    {/*<span className="input-group-text" id="basic-addon1">No. Of Adults</span>*/}
                                {/*</div>*/}
                                {/*<input type="number" min="0" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-5">*/}
                            {/*<div className="input-group mb-3">*/}
                                {/*<div className="input-group-prepend">*/}
                                    {/*<span className="input-group-text" id="basic-addon1">No. Of Kids</span>*/}
                                {/*</div>*/}
                                {/*<input type="number" min="0" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />*/}
                            {/*</div>*/}
                            {/*<br />*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-4"></div>*/}
                        {/*<div className="col-lg-4" align="center">*/}


                        {/**/}
                        {/*<Link to='/hotelList'>*/}
                        {/*<button type="button" className="btn btn-warning rounded">Find a Hotel</button>*/}

                        {/*</Link>*/}
                           {/**/}


                           {/**/}

                        {/*</div>*/}

                    {/*</div>*/}
                {/*</div>*/}
            {/*</form>*/}

            {/*<br />*/}
            {/*<br />*/}