import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import Thank from './Thank';

function Paypal(props) {

    //     let tranId = props.location.data.transportId;
    //     let guideId = props.location.data.guidePlanId;
    //     let event01Id = props.location.data.event01PlanId;
    //     let event02Id = props.location.data.event02PlanId;
    //     let hotelId = props.location.data.hotelPlanId;
    
    //   const [mytransportList, setmyTransportList] = useState([]);
    //   const [mytourguideList, setmytourguideList] = useState([]);
    //   const [myevent01List, setmyevent01List] = useState([]);
    //   const [myevent02List, setmyevent02List] = useState([]);
    //   const [myhotelList, setmyhotelList] = useState([]);
    
    
    //   useEffect( () => {
    //     fetch(`https://alphax-api.azurewebsites.net/api/transportproviders/${tranId}`).then((response) => {
    //        return response.json();
    //      }).then(responseData => {
    //         setmyTransportList(responseData);
    //      });
    //    },[tranId]);
       
     
    //    useEffect(() => {
    //      fetch(`https://alphax-api.azurewebsites.net/api/tourguides/${guideId}`).then((response) => {
    //        return response.json();
    //      }).then(responseData => {
    //         setmytourguideList(responseData);
    //      });
    //    }, [guideId]);
     
       
     
    //    useEffect(() => {
    //      fetch(`https://alphax-api.azurewebsites.net/api/eventplanners/${event01Id}`).then((response) => {
    //        return response.json();
    //      }).then(responseData => {
    //         setmyevent01List(responseData);
    //      });
    //    }, [event01Id]);
    
     
    //    useEffect(() => {
    //     fetch(`https://alphax-api.azurewebsites.net/api/eventplanners/${event02Id}`).then((response) => {
    //       return response.json();
    //     }).then(responseData => {
    //        setmyevent02List(responseData);
    //     });
    //   }, [event02Id]);
    
    
    //    useEffect(() => {
    //      fetch(`https://alphax-api.azurewebsites.net/api/hotels/${hotelId}`).then((response) => {
    //        return response.json();
    //      }).then(responseData => {
    //         setmyhotelList(responseData);
    //      });
    //    }, [hotelId]);

    // let travellers = props.location.data.travellers;
    // let days = props.location.data.days;


    //    let cart = ((myevent01List.price * travellers)+(myevent02List.price * travellers)+(mytransportList.costPerDistance)+(mytourguideList.costPerDay * days)+(myhotelList.price * days));
    //    let total = cart+20;

       const product = {
        price: props.location.data.sum,
        description: 'Payment for Smart Travel System'
      };
      console.log(props.location);

       const [paidFor, setPaidFor] = useState(false)
       const [error,setError] = useState(null)
       const paypalRef = useRef()

       useEffect(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.description,
                    amount: {
                      currency_code: 'USD',
                      value: product.price,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              setPaidFor(true);
              console.log(order);
            },
            onError: err => {
              setError(err);
              console.error(err);
            },
          })
          .render(paypalRef.current);
      }, [product.description, product.price]);
    
      if (paidFor) {
        return (
          <div>
            <Thank data={props.location.data}/>
          </div>
        );
      }
    
      return (
        <div>
            
          {error && <div>Uh oh, an error occurred! {error.message}</div>}
          <Card  className="shadow-lg" style={{  display:'inline-block', margin: '50px', border: '3px solid green', padding: '50px', left:'450px'}}>
          <h1>
            Total = {product.price}USD
          </h1>
          
          <div ref={paypalRef} />
          </Card>
        </div>
      );

}

export default Paypal;