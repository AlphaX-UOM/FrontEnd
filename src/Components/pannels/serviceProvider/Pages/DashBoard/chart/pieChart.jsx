import React, { useState, useEffect } from 'react';
import Chart from "chart.js";

 function ChartApp(props) {


    const [eventList, setEventList] = useState(null);
    const [translist, settranslist] = useState(null);
    const [guide, setGuide] = useState(null);
    const [hotel, setHotel] = useState(null);

    let userId = props.myId;
    // console.log(userId)
    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/eventplannerservices` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )

            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)
                responseData = responseData.filter(item => item.userID === userId);
                setEventList(responseData.reduce((total, pay) => total + 1, 0));



            });
    }, [userId]);

    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/hotelsservices` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )

            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)
                responseData = responseData.filter(item => item.userID === userId);
                setHotel(responseData.reduce((total, pay) => total + 1, 0));



            });
    }, [userId]);
    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/tourguideservices` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )

            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)
                responseData = responseData.filter(item => item.userID === userId);
                setGuide(responseData.reduce((total, pay) => total + 1, 0));



            });
    }, [userId]);
    useEffect(() => {
        fetch(
            `https://alphax-api.azurewebsites.net/api/transportservices` //`https://alphax-api.azurewebsites.net/api/eventplannerservicereservations/${userId}`
        )

            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                //  setEvent(responseData)
                responseData = responseData.filter(item => item.userID === userId);
                settranslist(responseData.reduce((total, pay) => total + 1, 0));



            });
    }, [userId]);
    // console.log(eventList)

  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Events", "Guide", "Hotels", "Transport"],
        datasets: [
          {
            label: "Post Summary",
            data: [eventList, guide, hotel, translist],
            backgroundColor: [
              "Red",
              "Yellow",
              "Green",
              "Orange"
            ],
            borderColor: ["Red",  "Yellow", "Green",  "Orange"],
            borderWidth: 1
          }
        ]
      }
    });
  });
  return (
    <div className="App">
      <canvas id="myChart" width="400" height="400" />
    </div>
  );
}
export default ChartApp;
