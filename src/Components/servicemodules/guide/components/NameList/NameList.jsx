import React, { useState, useEffect } from "react";
import NameListEle from "../NameListEle/NamelistEle";
import { Row, Col, Card } from "react-bootstrap";
import guidedetailspage from "../GuideDetails/guidedetailspage";
import "./formlist.css";
import connect from "react-redux/es/connect/connect";
import Guide_filters from "../Filter/FilterGuide"

function NameList(props) {
  const { date, date1,language_type_fil,price_type_fil } = props;

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(
      "https://alphax-api.azurewebsites.net/api/tourguideservices/Res?arrival=" +
        date.date.checkindate +
        "&&departure=" +
        date.date1.checkoutdate
    )
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);

 

  
    console.log("menna meka",price_type_fil);
  
  
  const Filterguide=state.filter((item) => {
    if (
      language_type_fil === null ||
      language_type_fil === "All"
    )
      return state;
    else if ( language_type_fil=== "English")
      return item.language === "English";
    else if (language_type_fil === "Japan")
      return item.language === "Japan";
    else if (language_type_fil === "Korean")
      return item.language === "Korean";
    
    else return item.language.includes( language_type_fil);
  });

  const Filterguide2= Filterguide.filter((item) => {   
    if (
      price_type_fil === null ||  price_type_fil=== "All"
    )
      return Filterguide;
    else if ( price_type_fil==="2500" )
      return item.costPerDay=== 2500;
    else if (price_type_fil === "3000")
      return item.costPerDay=== 3000;
    else if (price_type_fil === "4000")
      return item.costPerDay === 4000;
      else if (price_type_fil === "5000")
      return item.costPerDay === 5000;
      else if (price_type_fil === "6000")
      return item.costPerDay === 6000;
    else return item.costPerDay.includes( price_type_fil);
  });

 
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
 
 

  let nameListComponent = () => {
   
    return Filterguide2.map((Aname, i) => {
      return (
        <NameListEle
          key={i}
          userid={Aname.id}
          name={Aname.name}
          dob={Aname.dob}
          lang={Aname.language}
          cost={Aname.costPerDay}
          avatar={Aname.imgURL}
        />
      );
    });
  };

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%)",
          minHeight: "100vh",
        }}
      >
        <Row style={{ width: "100%", height: "100%" }}>
          <Col>
            <div style={{ paddingTop: "10px" }}>
              < Guide_filters />
            </div>
          </Col>
          <Col xs={10}>
            <Row>{nameListComponent()}</Row>
          </Col>
        </Row>
      </div>
    </>
  );
}


const mapStateToProps = (state) => {
  return {
    form_language: state.guide_input_reducer.language,
    date: state.guide_input_reducer.date,
    date1: state.guide_input_reducer.date1,
    language_type_fil: state.guide_input_reducer.language_filter,
    price_type_fil: state.guide_input_reducer.price_filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NameList);
