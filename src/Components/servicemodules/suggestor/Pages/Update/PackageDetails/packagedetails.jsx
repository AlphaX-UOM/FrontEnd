import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config.js";
import "./packageDetailsStyles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../ResultList/Spinner";
import { addToCart } from "../../../../../../store/lib/actions";

function PackageDetails(props) {
  const { add_to_cart } = props;

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  let tranId = props.selectId.transportId;
  let guideId = props.selectId.guidePlanId;
  let event01Id = props.selectId.event01PlanId;
  let event02Id = props.selectId.event02PlanId;
  let hotelId = props.selectId.hotelPlanId;

  const [mytransportList, setmyTransportList] = useState([]);
  const [mytourguideList, setmytourguideList] = useState([]);
  const [myevent01List, setmyevent01List] = useState([]);
  const [myevent02List, setmyevent02List] = useState([]);
  const [myhotelList, setmyhotelList] = useState([]);

  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/transportservices/${tranId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setmyTransportList(responseData);
      });
  }, [tranId]);

  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/tourguideservices/${guideId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setmytourguideList(responseData);
      });
  }, [guideId]);

  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/eventplannerservices/${event01Id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setmyevent01List(responseData);
      });
  }, [event01Id]);

  useEffect(() => {
    fetch(
      `https://alphax-api.azurewebsites.net/api/eventplannerservices/${event02Id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setmyevent02List(responseData);
      });
  }, [event02Id]);

  useEffect(() => {
    fetch(`https://alphax-api.azurewebsites.net/api/hotelsservices/${hotelId}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setmyhotelList(responseData);
      });
  }, [hotelId]);

  const cards = [
    {
      title: "Transport Service 🚙 " + mytransportList.name,
      description: mytransportList.description,
      image: "https://6jlvz1j5q3.csb.app/undraw_collection.svg",
      imageRatio: 784 / 1016,
    },
    {
      title: "Hotel Service 🏨" + myhotelList.name,
      description: myhotelList.otherDetails,
      image: "https://6jlvz1j5q3.csb.app/undraw_upload.svg",
      imageRatio: 839 / 1133,
    },
    {
      title: "Tour Guide 🤵" + mytourguideList.name,
      description: mytourguideList.otherDetails,
      image: "https://6jlvz1j5q3.csb.app/undraw_static_assets.svg",
      imageRatio: 730 / 1030,
    },
    {
      title: "Event 01 🏖️" + myevent01List.name,
      description: myevent01List.otherDetails,
      image: "https://6jlvz1j5q3.csb.app/undraw_static_assets.svg",
      imageRatio: 730 / 1030,
    },
    {
      title: "Click Below To Get Started",
      description: myevent02List.otherDetails,
      image: "https://6jlvz1j5q3.csb.app/undraw_static_assets.svg",
      imageRatio: 730 / 1030,
    },
    {
      title: "Event 02 🏞️" + myevent02List.name,
      description: myevent02List.otherDetails,
      image: "https://6jlvz1j5q3.csb.app/undraw_static_assets.svg",
      imageRatio: 730 / 1030,
    },
  ];

  const handleFormData = () => {
    let type = "TransportService";
    let checkin = props.formdata.checkin;
    let checkout = props.formdata.checkout;
    let totalUnit = mytransportList.pricePerDay * props.formdata.days;
    let number = props.formdata.days;

    props.add_to_cart(
      mytransportList.name,
      mytransportList.pricePerDay,
      tranId,
      props.formdata.travelers,
      date,
      checkin,
      checkout,
      type,
      props.formdata.days,
      totalUnit,
      number
    );

    type = "GuideService";
    totalUnit = mytourguideList.costPerDay * props.formdata.days;
    props.add_to_cart(
      mytourguideList.name,
      mytourguideList.costPerDay,
      guideId,
      props.formdata.travelers,
      date,
      checkin,
      checkout,
      type,
      props.formdata.days,
      totalUnit,
      number
    );

    type = "EventService";
    totalUnit = myevent01List.price;
    number = 1;
    props.add_to_cart(
      myevent01List.name,
      myevent01List.price,
      event01Id,
      props.formdata.travelers,
      date,
      checkin,
      checkout,
      type,
      props.formdata.days,
      totalUnit,
      number
    );

    type = "EventService";
    totalUnit = myevent02List.price;
    props.add_to_cart(
      myevent02List.name,
      myevent02List.price,
      event02Id,
      props.formdata.travelers,
      date,
      checkin,
      checkout,
      type,
      props.formdata.days,
      totalUnit,
      number
    );

    type = "HotelService";
    totalUnit =
      myhotelList.pricePerDay *
      props.formdata.days *
      Math.round(props.formdata.travelers / 2);
    number = props.formdata.days * Math.round(props.formdata.travelers / 2);
    props.add_to_cart(
      myhotelList.name,
      myhotelList.pricePerDay,
      hotelId,
      props.formdata.travelers,
      date,
      checkin,
      checkout,
      type,
      props.formdata.days,
      totalUnit,
      number
    );
  };

  if (
    mytransportList.id === undefined ||
    mytourguideList.id === undefined ||
    myevent01List.id === undefined ||
    myevent02List.id === undefined ||
    myhotelList.id === undefined
  ) {
    return <Spinner />;
  }

  return (
    <div className="main">
      <Particles>
        <Hero>
          <div className="container">
            <Info />
            <div className="row">
              {cards.map((card, i) => (
                <div className="column">
                  <Card>
                    <div className="card-title">{card.title}</div>
                   {card.title==="Click Below To Get Started" ? <div className="card-body"><center><Link to="/shoppingcart">
                <button class="btn btn-warning" onClick={handleFormData}>
                  Get Started!
                </button>
              </Link></center></div> : <div className="card-body">{card.description}</div>}
                    <Image ratio={card.imageRatio} src={card.image} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
      </Particles>
    </div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07, // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
}

function Particles({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: "absolute",
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
      {children && <div style={{ position: "relative" }}>{children}</div>}
    </div>
  );
}

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + "%",
          }}
        >
          <div className="ratio-inner">
            <img src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
      Explore your package Details
      <div className="notice">(best viewed at larger screen width)</div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    selectId: state.eventpnl.selectId,
    formdata: state.eventpnl.formdata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addResData: (reservations) => {
      dispatch({ type: "ADD_RESERVATIONS", reservations: reservations });
    },
    add_to_cart: (
      item,
      price,
      add_id,
      no_travellers,
      date,
      checkin,
      checkout,
      type,
      days,
      totalUnit,
      number
    ) => {
      dispatch(
        addToCart(
          item,
          price,
          add_id,
          no_travellers,
          date,
          checkin,
          checkout,
          type,
          days,
          totalUnit,
          number
        )
      );
    },
    add_to_cart: (
      item,
      price,
      add_id,
      no_travellers,
      date,
      checkin,
      checkout,
      type,
      days,
      totalUnit,
      number
    ) => {
      dispatch(
        addToCart(
          item,
          price,
          add_id,
          no_travellers,
          date,
          checkin,
          checkout,
          type,
          days,
          totalUnit,
          number
        )
      );
    },
    add_to_cart: (
      item,
      price,
      add_id,
      no_travellers,
      date,
      checkin,
      checkout,
      type,
      days,
      totalUnit,
      number
    ) => {
      dispatch(
        addToCart(
          item,
          price,
          add_id,
          no_travellers,
          date,
          checkin,
          checkout,
          type,
          days,
          totalUnit,
          number
        )
      );
    },
    add_to_cart: (
      item,
      price,
      add_id,
      no_travellers,
      date,
      checkin,
      checkout,
      type,
      days,
      totalUnit,
      number
    ) => {
      dispatch(
        addToCart(
          item,
          price,
          add_id,
          no_travellers,
          date,
          checkin,
          checkout,
          type,
          days,
          totalUnit,
          number
        )
      );
    },
    add_to_cart: (
      item,
      price,
      add_id,
      no_travellers,
      date,
      checkin,
      checkout,
      type,
      days,
      totalUnit,
      number
    ) => {
      dispatch(
        addToCart(
          item,
          price,
          add_id,
          no_travellers,
          date,
          checkin,
          checkout,
          type,
          days,
          totalUnit,
          number
        )
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PackageDetails);
