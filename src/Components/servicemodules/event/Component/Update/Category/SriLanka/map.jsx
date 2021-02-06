import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

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


const mapOptions = {
  chart: {
    map: "countries/lk/lk-all"
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
    pointFormat: "lat: {point.lat}, lon: {point.lon}"
  },
  series: [
    {
      // Use the gb-all map with no data as a basemap
      name: "Basemap",
      mapData: mapDataIE,
      borderColor: "#A0A0A0",
      nullColor: "rgba(200, 200, 200, 0.3)",
      showInLegend: false,
      data:data,
      hover: {
        color: '#BADA55'
    },
      dataLabels: {
        enabled: true,
      
    }
    },
    {
      // Specify points using lat/lon
      type: "mapbubble",
      name: "Locations",
      color: "#4169E1",
      data: [{ z: 10, keyword: "Galway", lat: 7.8731 , lon: 80.7718 }],
      cursor: "pointer",
      point: {
        events: {
          click: function () {
            console.log(this.keyword);
          }
        }
      }
    }
  ]
};

const Map = () => (
  <div>
    <HighchartsReact
      constructorType={"mapChart"}
      highcharts={Highcharts}
      options={mapOptions}
    />
  </div>
);
export default Map;