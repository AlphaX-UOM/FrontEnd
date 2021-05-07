
import { color } from 'highcharts';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';




function LineChart1(){
  const[eventJan,setEventJan]=useState(null);
const[eventFeb,setEventFeb]=useState(null);
const[eventMar,setEventMar]=useState(null);
const[eventApr,setEventApr]=useState(null);
const[eventMay,setEventMay]=useState(null);
const[eventJune,setEventJune]=useState(null);
const[eventJuly,setEventJuly]=useState(null);
const[eventAug,setEventAug]=useState(null);
const[eventSept,setEventSept]=useState(null);
const[eventOct,setEventOct]=useState(null);
const[eventNov,setEventNov]=useState(null);
const[eventDecem,setEventDecem]=useState(null);
const[eventJan1,setEventJan1]=useState(0);
const[eventFeb1,setEventFeb1]=useState(0);
const[eventMar1,setEventMar1]=useState(0);
const[eventApr1,setEventApr1]=useState(0);
const[eventMay1,setEventMay1]=useState(0);
const[eventJune1,setEventJune1]=useState(0);
const[eventJuly1,setEventJuly1]=useState(0);
const[eventAug1,setEventAug1]=useState(0);
const[eventSept1,setEventSept1]=useState(0);
const[eventOct1,setEventOct1]=useState(0);
const[eventNov1,setEventNov1]=useState(0);
const[eventDecem1,setEventDecem1]=useState(null);
// var  responseData1;
// var  responseData2;
// var  responseData3;
// var  responseData4;
// var  responseData5;
// var  responseData6;
// var  responseData7;
// var  responseData8;
// var  responseData9;
// var  responseData10;
// var  responseData11;
// var  responseData12;
var current=new Date().getFullYear()
var previous=current-1

useEffect(() => {
  fetch(
    'https://alphax-api.azurewebsites.net/api/payments'   
  )
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
     
        setEventJan (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='01'& (new Date(item.date).getFullYear() ===previous)).reduce((total,pay)=>total+pay.amount,0));
       
        setEventFeb (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='02'&(new Date(item.date).getFullYear() ===previous)).reduce((total,pay)=>total+pay.amount,0));
       
        setEventMar (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='03'&(new Date(item.date).getFullYear() ===previous)).reduce((total,pay)=>total+pay.amount,0));
      
        setEventApr (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='04'&(new Date(item.date).getFullYear() ===previous)).reduce((total,pay)=>total+pay.amount,0));
     
        setEventMay (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='05'&(new Date(item.date).getFullYear() ===previous)).reduce((total,pay)=>total+pay.amount,0));
     
        setEventJune (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='06'&(new Date(item.date).getFullYear() ===previous)).reduce((total,pay)=>total+pay.amount,0));
       
        setEventJuly (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='07'&(new Date(item.date).getFullYear() ===previous)).reduce((total,pay)=>total+pay.amount,0));
 
        setEventAug (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='08'&(new Date(item.date).getFullYear() ===previous)).reduce((total,pay)=>total+pay.amount,0));
        // responseData9 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='09');
        setEventSept (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='09'&(new Date(item.date).getFullYear() ===previous)).reduce((total,pay)=>total+pay.amount,0));
        // responseData10 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='10');
        setEventOct (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='10'&(new Date(item.date).getFullYear() ===previous)).reduce((total,pay)=>total+pay.amount,0));
        // responseData11 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='11');
        setEventNov (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='11'&(new Date(item.date).getFullYear() ===previous)).reduce((total,pay)=>total+pay.amount,0));
        // responseData12 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='12');
        setEventDecem (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='12'&(new Date(item.date).getFullYear() ===previous)).reduce((total,pay)=>total+pay.amount,0));

        setEventJan1 (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='01'& (new Date(item.date).getFullYear() ===current)).reduce((total,pay)=>total+pay.amount,0));
        // responseData2 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='02');
        setEventFeb1 (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='02'&(new Date(item.date).getFullYear() ===current)).reduce((total,pay)=>total+pay.amount,0));
        // responseData3 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='03');
        setEventMar1 (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='03'&(new Date(item.date).getFullYear() ===current)).reduce((total,pay)=>total+pay.amount,0));
        // responseData4 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='04');
        setEventApr1 (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='04'&(new Date(item.date).getFullYear() ===current)).reduce((total,pay)=>total+pay.amount,0));
        // responseData5 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='05');
        setEventMay1 (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='05'&(new Date(item.date).getFullYear() ===current)).reduce((total,pay)=>total+pay.amount,0));
        // responseData6 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='06');
        setEventJune1 (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='06'&(new Date(item.date).getFullYear() ===current)).reduce((total,pay)=>total+pay.amount,0));
        // responseData7 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='07');
        setEventJuly1 (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='07'&(new Date(item.date).getFullYear() ===current)).reduce((total,pay)=>total+pay.amount,0));
        // responseData8 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='08');
        setEventAug1 (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='08'&(new Date(item.date).getFullYear() ===current)).reduce((total,pay)=>total+pay.amount,0));
        // responseData9 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='09');
        setEventSept1 (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='09'&(new Date(item.date).getFullYear() ===current)).reduce((total,pay)=>total+pay.amount,0));
        // responseData10 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='10');
        setEventOct1 (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='10'&(new Date(item.date).getFullYear() ===current)).reduce((total,pay)=>total+pay.amount,0));
        // responseData11 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='11');
        setEventNov1 (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='11'&(new Date(item.date).getFullYear() ===current)).reduce((total,pay)=>total+pay.amount,0));
        // responseData12 = responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='12');
        setEventDecem1 (responseData.filter(item =>  (new Date(item.date).getMonth()+1) =='12'&(new Date(item.date).getFullYear() ===current)).reduce((total,pay)=>total+pay.amount,0));
       
        console.log("response data->"+responseData);
    });
    
},[]);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      labels: ["Events", "Guide", "Hotels", "Transport"],
      fill: false,
      lineTension: 0.1,
      // backgroundColor: 'rgba(rgb(255,0,0,1))',
      backgroundColor:'rgba(75,192,192,1)',
      borderColor: 'rgb(173,216,230)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(255,0,0,6)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [eventJan, eventFeb, eventMar, eventApr, eventMay, eventJune, eventJuly,eventAug,eventSept,eventOct,eventNov,eventDecem],
    
    },
    {
      label: '2021',
      fill: false,
      lineTension: 0.1,
      // backgroundColor: 'rgba(rgb(255,0,0,1))',
      backgroundColor:'rgb(75,0,130)',
      borderColor: 'rgb(238,130,238)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(255,0,0,6)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [eventJan1, eventFeb1, eventMar1, eventApr1, eventMay1, eventJune1, eventJuly1,eventAug1,eventSept1,eventOct1,eventNov1,eventDecem1],
    
    }
  ]
};

const lineOptions = {
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
        color:'#FFF'
      },
      ticks: {
        fontColor: "#FFF", // this here
      },
    }],
    yAxes: [{
      // stacked: true,
      gridLines: {
        display: false,
      },
     
      ticks: {
        beginAtZero: true,
        fontColor: "#FFF", 
      
        userCallback(value) {
     
          value = value.toString();
          value = value.split(/(?=(?:...)*$)/);

     
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
  <div>
  <h4>Revenue Per Month</h4>
  <div>
  <div style={styles}>
  <h6 style={{color:'rgb(173,216,230)'}}> Previous Year : {previous} </h6>
    <h6 style={{color:'rgb(238,130,238)'}}> Current Year : {current} </h6>
  
  <Line data={data} options={lineOptions}  />

  </div>
 

  
  
  </div>
  </div>
);
}

export default LineChart1;
