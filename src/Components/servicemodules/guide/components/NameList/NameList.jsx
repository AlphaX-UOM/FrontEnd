import React, { useState, useEffect } from "react";
import NameListEle from "../NameListEle/NamelistEle";
import { Row, Col, Card } from "react-bootstrap";
import guidedetailspage from "../GuideDetails/guidedetailspage";
import "./formlist.css";
import connect from "react-redux/es/connect/connect";

function NameList(props) {
  const { form_language, date, date1 } = props;
  const [language3, setLanguage3] = useState("x");
  const [rating, setrating] = useState("x");
  const [cost, setcost] = useState("x");

  const [language3x, setLanguage3x] = useState("x");
  const [ratingx, setratingx] = useState("x");
  const [costx, setcostx] = useState("x"); 

  useEffect(() => {
    console.log(form_language);
    console.log(date);
    console.log(date1);
  }, []);
  function NameListMenu() {
    function submitthis() {
      return setLanguage3(language3x), setrating(ratingx), setcost(costx);
    }

    const handleInputlanguage1 = (event) => {
      setLanguage3x((language1) => event.target.value);
    };
    const handleInputlanguage2 = (event) => {
      setratingx((language1) => event.target.value);
    };

    const handleInputlanguage3 = (event) => {
      setcostx((language1) => event.target.value);
    };
    setNamelistlan(language3);

    return (
      <div>
        <div styles={{ alignItems: "center" }}>
        
          <div
            styles={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div style={{ padding: "10px" }}>
              {/*<select className='form-input-g' id="language" placeholder='Search' onChange={handleInputlanguage1}  > */}
              {/*<option value="Hindi">Language</option>*/}
              {/*<option value="Spanish">Spanish</option>*/}
              {/*<option value="Chinees">Chinees</option>*/}
              {/*<option value="English">English</option>*/}
              {/*<option value="French">French</option>*/}
              {/*<option value="x">----</option>*/}
              {/*</select>*/}
            </div>
            <div style={{ padding: "10px" }}>
              <select
                className="form-input-g"
                id="rating"
                placeholder="Search"
                onChange={handleInputlanguage2}
              >
                <option value="all">Rating</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="x">----</option>
              </select>
            </div>
            <div style={{ padding: "10px" }}>
              <select
                className="form-input-g"
                id="price"
                placeholder="Search"
                onChange={handleInputlanguage3}
              >
                <option value="all">Price</option>
                <option value=" 3000">3000</option>
                <option value="4000">4000</option>
                <option value="5000">5000</option>
                <option value="6000">6000</option>
                <option value="x">----</option>
              </select>
              <button
                type="button"
                className="form-input-btn-g1"
                onClick={submitthis}
              >
                {" "}
                Search
              </button>
            </div>
          </div>
          {/* </Card.Body>
                   
                    <Card.Body>
                   
                    </Card.Body>
                    </Card> */}
        </div>
      </div>
    );
  }

  function selection() {
    if (
      namelistlan === '"x"' ||
      (namelistlan === "x" && cost === "x" && rating === "x")
    ) {
      return nameListComponent();
    } else if (namelistlan !== "x" && cost === "x" && rating === "x") {
      return nameListComponent1();
    } else if (namelistlan === "x" && cost !== "x" && rating === "x") {
      return nameListComponent2();
    } else if (namelistlan === "x" && cost === "x" && rating !== "x") {
      return nameListComponent3();
    } else if (namelistlan === "x" && cost !== "x" && rating !== "x") {
      return nameListComponent4();
    } else if (namelistlan !== "x" && cost !== "x" && rating === "x") {
      return nameListComponent5();
    } else if (namelistlan !== "x" && cost === "x" && rating !== "x") {
      return nameListComponent6();
    } else if (namelistlan !== "x" && cost !== "x" && rating !== "x") {
      return nameListComponent7();
    } else {
      return nameListComponent1();
    }
  }

  const language = form_language;
  const [namelistlan, setNamelistlan] = useState('"x"');

  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/TourGuideServices")
      .then((res) => res.json())
      .then((data) => {
        setNameList(data);
      });
  }, []);

  const nameListComponent = () => {
    
      // nameList &&
      // nameList
      //   .filter((person) => person.language === form_language)
      //   .map((Aname, i) => {
      //     return (
      //       <NameListEle
      //         key={i}
      //         userid={Aname.id}
      //         name={Aname.name}
      //         dob={Aname.dob}
      //         lang={Aname.language}
      //         cost={Aname.costPerDay}
      //       />
      //     );
      //   })
    return(
      nameList.map((Aname,i)=>{
        return(
          <NameListEle
                   key={i}
                  userid={Aname.id}
                  name={Aname.name}
                   dob={Aname.dob}
                  lang={Aname.language}
                  cost={Aname.costPerDay}
                 />
        )
      })
    )
    
  };

  const nameListComponent1 = () => {
    return (
      nameList &&
      nameList
        .filter((person) => person.language1 === namelistlan)
        .map((Aname, i) => {
          return (
            <NameListEle
              key={i}
              userid={Aname.id}
              name={Aname.name}
              dob={Aname.dob}
              lang={Aname.language}
              cost={Aname.costPerDay}
            />
          );
        })
    );
  };

  const nameListComponent2 = () => {
    return (
      nameList &&
      nameList
        .filter(
          (person) =>
            person.language1 === form_language && person.costPerDay == cost
        )
        .map((Aname, i) => {
          return (
            <NameListEle
              key={i}
              userid={Aname.id}
              name={Aname.name}
              dob={Aname.dob}
              lang={Aname.language}
              cost={Aname.costPerDay}
            />
          );
        })
    );
  };

  const nameListComponent3 = () => {
    return (
      nameList &&
      nameList
        .filter(
          (person) => person.language1 === form_language && person.age == rating
        )
        .map((Aname, i) => {
          return (
            <NameListEle
              key={i}
              userid={Aname.id}
              name={Aname.name}
              dob={Aname.dob}
              lang={Aname.language}
              cost={Aname.costPerDay}
            />
          );
        })
    );
  };
  const nameListComponent4 = () => {
    return (
      nameList &&
      nameList
        .filter(
          (person) =>
            person.language1 === form_language &&
            person.age == rating &&
            person.costPerDay == cost
        )
        .map((Aname, i) => {
          return (
            <NameListEle
              key={i}
              userid={Aname.id}
              name={Aname.name}
              dob={Aname.dob}
              lang={Aname.language}
              cost={Aname.costPerDay}
            />
          );
        })
    );
  };
  const nameListComponent5 = () => {
    return (
      nameList &&
      nameList
        .filter(
          (person) =>
            person.language1 === namelistlan && person.costPerDay == cost
        )
        .map((Aname, i) => {
          return (
            <NameListEle
              key={i}
              userid={Aname.id}
              name={Aname.name}
              dob={Aname.dob}
              lang={Aname.language}
              cost={Aname.costPerDay}
            />
          );
        })
    );
  };
  const nameListComponent6 = () => {
    return (
      nameList &&
      nameList
        .filter(
          (person) => person.language1 === namelistlan && person.age == rating
        )
        .map((Aname, i) => {
          return (
            <NameListEle
              key={i}
              userid={Aname.id}
              name={Aname.name}
              dob={Aname.dob}
              lang={Aname.language}
              cost={Aname.costPerDay}
            />
          );
        })
    );
  };

  const nameListComponent7 = () => {
    return (
      nameList &&
      nameList
        .filter(
          (person) =>
            person.language1 === namelistlan &&
            person.age == rating &&
            person.costPerDay == cost
        )
        .map((Aname, i) => {
          return (
            <NameListEle
              key={i}
              userid={Aname.id}
              name={Aname.name}
              dob={Aname.dob}
              lang={Aname.language}
              cost={Aname.costPerDay}
            />
          );
        })
    );
  };

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%)",minHeight: "100vh"
        }}
      >
        <Row style={{ width: "100%", height: "100%" }}>
          <Col>
            <div style={{ paddingTop: "10px" }}>
              <NameListMenu />
            </div>
          </Col>
          <Col xs={10}>
            <Row>{ nameListComponent()}</Row>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NameList);
