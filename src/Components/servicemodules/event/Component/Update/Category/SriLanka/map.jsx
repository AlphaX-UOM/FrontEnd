import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { connect } from "react-redux";
import { Container, Col, Row } from 'react-bootstrap';
import districtmap from './images/clo-lanka-tours-day-tours.jpg';


highchartsMap(Highcharts);


var mapDataIE = require('@highcharts/map-collection/countries/lk/lk-all.geo.json');
var data = [
    ['lk-bc', 0],
    ['lk-mb', 1],
    ['lk-ja', 2],
    ['lk-kl', 3],
    ['lk-ky', 4],
    ['lk-mt', 5],
    ['lk-nw', 6],
    ['lk-ap', 7],
    ['lk-pr', 8],
    ['lk-tc', 9],
    ['lk-ad', 10],
    ['lk-va', 11],
    ['lk-mp', 12],
    ['lk-kg', 13],
    ['lk-px', 14],
    ['lk-rn', 15],
    ['lk-gl', 16],
    ['lk-hb', 17],
    ['lk-mh', 18],
    ['lk-bd', 19],
    ['lk-mj', 20],
    ['lk-ke', 21],
    ['lk-co', 22],
    ['lk-gq', 23],
    ['lk-kt', 24]
];

function Map(props){
  const [location,setlocation]=useState();
const mapOptions = {
  
  chart: {
    map: "countries/lk/lk-all",
    //backgroundColor: '#006400',
  
  },

  title: {
    text: " "
  },
  credits: {
    enabled: false
  },
  mapNavigation: {
    enabled: false
  },
  tooltip: {
    headerFormat: "",
    // pointFormat: "lat: {point.lat}, lon: {point.lon}"
  },
  plotOptions: {
    series: {
  
        events: {
            click: function (e) {
              setlocation(e.point.value);
              props.addMapData(e.point.value);
                // var text =  this.name +
                //         ' ' + e.point.name + '  ' + e.point.value ;
                      
                // if (!this.chart.clickLabel) {
                //     this.chart.clickLabel = this.chart.renderer.label("", 0, 250)
                //         .css({
                //             width: '280px'
                //         })
                //         // .add();
                    
                //       setlocation(e.point.value);
                //       props.addMapData(e.point.value);
                // } else {
                //     this.chart.clickLabel.attr({
                       
                //     });
                // }
            }
        }
    }
},
colors:'#008000',
innerWidth:"100px",
outerWidth:"100px",

  series: [
    {
         name: "Basemap",
      mapData: mapDataIE,
      borderColor: "#A0A0A0",
  nullColor: "rgba((0,100,0))",
      showInLegend: false,
      data:data,
      color: '#228B22',
      hover: {
       color: '#006400'
    },
      dataLabels: {
      //  enabled: true,
      
    }
    },
    {
      // Specify points using lat/lon
      type: "mapbubble",
      name: "Locations",
      color: "#006400",
      data: [],
    
       
      cursor: "pointer",
   
    
  
}
  ]
};


return(
  
  <div>
  
    <HighchartsReact
      constructorType={"mapChart"}
      highcharts={Highcharts}
      options={mapOptions}
      
    
    />
    
  </div>
     
  
);
}
const mapStateToProps = (state) => {
  return {
    mapdata: state.eventpnl.mapdata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMapData: (mapdata) => {
      dispatch({ type: "ADD_EVENT_MAP_DATA", mapdata: mapdata });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
