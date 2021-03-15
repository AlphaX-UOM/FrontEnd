
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';




function LineChart(){
  const[eventJan,setEventJan]=useState(0);
const[eventFeb,setEventFeb]=useState(0);
const[eventMar,setEventMar]=useState(0);
const[eventApr,setEventApr]=useState(0);
const[eventMay,setEventMay]=useState(0);
const[eventJune,setEventJune]=useState(0);
const[eventJuly,setEventJuly]=useState(0);
const[eventAug,setEventAug]=useState(0);
const[eventSept,setEventSept]=useState(0);
const[eventOct,setEventOct]=useState(0);
const[eventNov,setEventNov]=useState(0);
const[eventDecem,setEventDecem]=useState(0);
var  responseData1;
var  responseData2;
var  responseData3;
var  responseData4;
var  responseData5;
var  responseData6;
var  responseData7;
var  responseData8;
var  responseData9;
var  responseData10;
var  responseData11;
var  responseData12;


useEffect(() => {
  fetch(
    'https://localhost:44338/api/payments'   
  )
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
        responseData1 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='01');
        setEventJan (responseData1.reduce((total,pay)=>total+pay.amount,0));
        responseData2 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='02');
        setEventFeb (responseData2.reduce((total,pay)=>total+pay.amount,0));
        responseData3 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='03');
        setEventMar (responseData3.reduce((total,pay)=>total+pay.amount,0));
        responseData4 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='04');
        setEventApr (responseData4.reduce((total,pay)=>total+pay.amount,0));
        responseData5 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='05');
        setEventMay (responseData5.reduce((total,pay)=>total+pay.amount,0));
        responseData6 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='06');
        setEventJune (responseData6.reduce((total,pay)=>total+pay.amount,0));
        responseData7 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='07');
        setEventJuly (responseData7.reduce((total,pay)=>total+pay.amount,0));
        responseData8 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='08');
        setEventAug (responseData8.reduce((total,pay)=>total+pay.amount,0));
        responseData9 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='09');
        setEventSept (responseData9.reduce((total,pay)=>total+pay.amount,0));
        responseData10 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='10');
        setEventOct (responseData10.reduce((total,pay)=>total+pay.amount,0));
        responseData11 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='11');
        setEventNov (responseData11.reduce((total,pay)=>total+pay.amount,0));
        responseData12 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='12');
        setEventDecem (responseData12.reduce((total,pay)=>total+pay.amount,0));
       
        console.log("response data->"+responseData);
    });
    
}, [ ]);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [eventJan, eventFeb, eventMar, eventApr, eventMay, eventJune, eventJuly,eventAug,eventSept,eventOct,eventNov,eventDecem],
    }
  ]
};

const lineOptions = {
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
      },
    }],
    yAxes: [{
      // stacked: true,
      gridLines: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        // Return an empty string to draw the tick line but hide the tick label
        // Return `null` or `undefined` to hide the tick line entirely
        userCallback(value) {
          // Convert the number to a string and splite the string every 3 charaters from the end
          value = value.toString();
          value = value.split(/(?=(?:...)*$)/);

          // Convert the array to a string and format the output
          value = value.join(' ');
          return `$.${value}`;
        },
      },
    }],
  },
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
};


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

return (
  
  <div style={styles}>
    <Line data={data} options={lineOptions} />
  </div>
);
}

export default LineChart;
