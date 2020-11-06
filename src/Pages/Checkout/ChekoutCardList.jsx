import React, { useState, useEffect } from 'react';
import CheckoutCard from './CheckoutCard';
import { Card} from 'react-bootstrap';
import CreditCard from './CreditCard';

function CheckoutCardList(props) {


    let tranId = props.data.transportId;
    let guideId = props.data.guidePlanId;
    let event01Id = props.data.event01PlanId;
    let event02Id = props.data.event02PlanId;
    let hotelId = props.data.hotelPlanId;
    let travellers = props.data.travellers;
    let days = props.data.days;

    // console.log(tranId);

  const [mytransportList, setmyTransportList] = useState([]);
  const [mytourguideList, setmytourguideList] = useState([]);
  const [myevent01List, setmyevent01List] = useState([]);
  const [myevent02List, setmyevent02List] = useState([]);
  const [myhotelList, setmyhotelList] = useState([]);


  useEffect( () => {
    fetch(`https://localhost:44394/api/transportproviders/${tranId}`).then((response) => {
       return response.json();
     }).then(responseData => {
        setmyTransportList(responseData);
     });
   },[tranId]);
   
 
   useEffect(() => {
     fetch(`https://localhost:44394/api/tourguides/${guideId}`).then((response) => {
       return response.json();
     }).then(responseData => {
        setmytourguideList(responseData);
     });
   }, [guideId]);
 
   
 
   useEffect(() => {
     fetch(`https://localhost:44394/api/eventplanners/${event01Id}`).then((response) => {
       return response.json();
     }).then(responseData => {
        setmyevent01List(responseData);
     });
   }, [event01Id]);

 
   useEffect(() => {
    fetch(`https://localhost:44394/api/eventplanners/${event02Id}`).then((response) => {
      return response.json();
    }).then(responseData => {
       setmyevent02List(responseData);
    });
  }, [event02Id]);


   useEffect(() => {
     fetch(`https://localhost:44394/api/hotels/${hotelId}`).then((response) => {
       return response.json();
     }).then(responseData => {
        setmyhotelList(responseData);
     });
   }, [hotelId]);


   let cart = ((myevent01List.price * travellers)+(myevent02List.price * travellers)+(mytransportList.costPerDistance)+(mytourguideList.costPerDay * days)+(myhotelList.price * days));
   let total = cart+20;

    return (
        <React.Fragment>
            <div className="container-fluid" style={{ height: '750px' }}>
                <div className="row">
                    <div className="col-7">
                        <div className="container mt-4">
                            <ul className="list-group">
                                <CheckoutCard 
                                key={myevent01List.eventId}
                                name={myevent01List.eventName}
                                description={myevent01List.otherDetails}
                                price={(myevent01List.price * travellers)}
                                units={travellers}
                                />

                                <CheckoutCard
                                key={myevent02List.eventId}
                                name={myevent02List.eventName}
                                description={myevent02List.otherDetails}
                                price={(myevent02List.price * travellers)}
                                units={travellers}
                                 />

                                <CheckoutCard 
                                key={myhotelList.hotelId}
                                name={myhotelList.hotelName}
                                description={myhotelList.features}
                                price={(myhotelList.price * days)}
                                units={days}
                                />

                                <CheckoutCard 
                                key={mytransportList.tpid}
                                name={mytransportList.name}
                                description={mytransportList.description}
                                price={mytransportList.costPerDistance}
                                units={'1 KM'}
                                />

                                <CheckoutCard 
                                key={mytourguideList.guideId}
                                name={mytourguideList.name}
                                description={mytourguideList.languages}
                                price={(mytourguideList.costPerDay * days)}
                                units={days}
                                />

                            </ul>
                        </div>
                    </div>
                    <div className="col-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="text-center">Checkout</Card.Header>
                           <div className="container">
                               <div className="row">
                                   <div className="col-8">
                                       Cart -:
                                   </div>
                                   <div className="col-4">
                                        {cart}$
                                   </div>
                               </div>
                               <div className="row">
                                   <div className="col-8">
                                       Charges -:
                                   </div>
                                   <div className="col-4">
                                       20$
                                   </div>
                               </div>
                               <div className="row">
                                   <div className="col-8">
                                       Total -:
                                   </div>
                                   <div className="col-4">
                                       <hr/>
                                      {total}$
                                       <hr/>
                                   </div>
                               </div>
                           </div>
                        </Card>
                        <br/>
                        <CreditCard />
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default CheckoutCardList;