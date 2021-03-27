const initialState = {
    eventmapCompare:["Batticaloa","Mannar","Jaffna","Kilinochchi","Kandy","Matale","Nuwara Eliya","Ampara","Polonnaruwa","Trincomalee","Anuradhapura",
    "Vavuniya","Mullaitivu","Kurunegala","Puttalam","Ratnapura","Galle","Hambantota","Matara",
    "Badulla","Monaragala","Kegalle","Colombo","Gampaha","Kalutara"],
    
    posts: [
        { id: '1', title: 'Sudam Yasodya', body: 'Hello me Sudam Yasodya love to crush codes' },
        { id: '2', title: 'Sheen Perera', body: 'Hello me Sudam Yasodya love to play game' },
        { id: '3', title: 'Ghost Ghost', body: 'Hello me Sudam Yasodya love to listen music' }
    ],
    formdata: {
        budget: 1000000,
        travelers: 2,
        days: 4,
        Checkin: null,
        Checkout: null,
        aduls: 2,
        kids:2,
    },
    slider: [{
        id: 1,
        id: 2,
        id: 3
    }],
    selectId: {
        transportId: '1',
        guidePlanId: '1',
        event01PlanId: '1',
        event02PlanId: '1',
        hotelPlanId: '1',
        travellers: 2,
        budget: 10000,
        days: 4
    },
    reservations: [
        {
            id: '1',
            name: "transportres",
            price: 200,
            condition: "",
            units: null,
            unitTotal: 200,
            serID: '1'
        },
        {
            id: '2',
            name: "tourguide",
            price: 200,
            condition: "",
            units: null,
            unitTotal: 200,
            serID: '1'
        },
        {
            id: '1',
            name: "event01",
            price: 200,
            condition: "",
            units: null,
            unitTotal: 200,
            serID: '1'
        },
        {
            id: '1',
            name: "event02",
            price: 200,
            condition: "",
            units: null,
            unitTotal: 200,
            serID: '1'
        },
        {
            id: '1',
            name: "hotelres",
            price: 200,
            condition: "",
            units: null,
            unitTotal: 200,
            serID: '1'
        }
    ],
    total: null,
    type: null,
    eventData: [
        {
            id: '1',
            name: "testevent",
            price: 200,
            condition: "",
            units: null,
            unitTotal: 200
        }
    ],
    userCred: {

    },
    adminPopup: false,
    adminRefundData: {

    },
    eventDate: {
        checkin: null,
        checkout: null
    },
    mapdata:null,
    auddata:null,
    pricedata:null,
    searchdata:null,

}
const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_FORM_DATA') {
        console.log("Hey there reducers");
        return {
            ...state,
            formdata: action.formdata
        }
    }
    if (action.type === 'ADD_SELECTED_DATA') {
        return {
            ...state,
            selectId: action.selectId
        }
    }
    if (action.type === 'ADD_RESERVATIONS') {
        return {
            ...state,
            reservations: action.reservations
        }
    }
    if (action.type === 'ADD_PAYPAL_DATA') {
        return {
            ...state,
            total: action.total
        }
    }
    if (action.type === 'ADD_Category_DATA') {
        console.log("Category reducer reached->" + action.selected);
        return {
            ...state,
            type: action.selected
        }
    }
    if (action.type === 'ADD_Event_DATA') {
        console.log("Event reducer reached->" + action.eventData);
        return {
            ...state,
            reservations: action.eventData
        }
    }
    if (action.type === 'ADD_USER') {
        return {
            ...state,
            userCred: action.userCred
        }
    }
    if (action.type === 'Admin_Popup') {
        return {
            ...state,
            adminPopup: action.adminPopup
        }
    }
    if (action.type === 'Admin_Refund_Data') {
        return {
            ...state,
            adminRefundData: action.adminRefundData
        }
    }
    if (action.type === 'ADD_EVENT_DATE') {
        return {
            ...state,
            eventDate: action.eventDate
        }
    }
    if (action.type === 'ADD_EVENT_MAP_DATA') {
        console.log("Hey there event map selected-> "+action.mapdata);
        return {
           
            ...state,
            mapdata: action.mapdata
        }
    }
    if (action.type === 'ADD_EVENT_AUD_DATA') {
        console.log("Hey there event audience selected-> "+action.auddata);
        return {
           
            ...state,
            auddata: action.auddata
        }
    }
    if (action.type === 'ADD_PRICE_DATA') {
        console.log("Hey there price selected-> "+action.auddata);
        return {
           
            ...state,
            pricedata: action.pricedata
        }
    }
    if (action.type === 'ADD_SEARCH_DATA') {
        console.log("Hey there search selected-> "+action.searchdata);
        return {
           
            ...state,
            pricedata: action.pricedata
        }
    }
    return state;
}

export default rootReducer;