import React, { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { connect } from "react-redux";
function Displayratings(props) {
    // console.log("props in itemlanding ->"+props.location.data.id);
    // console.log(props.match.params.id)
    const [total, setTotal] = useState(0);
    const [value, setValue] = useState(0);


    const [eventlist,setEventList]=useState(null);
    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/transportServiceRatings` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )

            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)
                responseData = responseData.filter(item => item.transportServiceID === props.id);
                setValue(responseData.reduce((total,pay1)=>total+ pay1.rating,0))
                setTotal(responseData.reduce((total, pay) => total + 1, 0));

            });
    }, [props.id]);

    return (
        <div>

                                    <Rating
                                        name="half-rating-read"
                                        value={value/total}
                                        precision={0.5}
                                        readOnly
                                    /> <small> {total} reviews</small>

        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        userCred: state.eventpnl.userCred,
    };
};

export default connect(mapStateToProps)(Displayratings);

