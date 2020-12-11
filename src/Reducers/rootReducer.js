const initialState = {
    posts: [
        { id: '1', title: 'Sudam Yasodya', body: 'Hello me Sudam Yasodya love to crush codes' },
        { id: '2', title: 'Sheen Perera', body: 'Hello me Sudam Yasodya love to play game' },
        { id: '3', title: 'Ghost Ghost', body: 'Hello me Sudam Yasodya love to listen music' }
    ],
    formdata: {
        budget: 10000,
        travelers: 2,
        days: 4
    },
    slider: [{
        id: 1,
        id: 2,
        id: 3
    }],
    selectId: {
        transportId : '1',
        guidePlanId: '1',
        event01PlanId: '1',
        event02PlanId: '1',
        hotelPlanId: '1',
        travellers: 2,
        budget: 10000,
        days: 4
    },
    reservations : [
        {
          id: '1',
          name: "transportres",
          price: 200,
          units: 1,
          unitTotal:200
        },
        {
            id: '2',
            name: "tourguide",
            price: 200,
            units: 1,
            unitTotal:200
          },
          {
            id: '1',
            name: "event01",
            price: 200,
            units: 1,
            unitTotal:200
          },
          {
            id: '1',
            name: "event02",
            price: 200,
            units: 1,
            unitTotal:200
          },
          {
            id: '1',
            name: "hotelres",
            price: 200,
            units: 1,
            unitTotal:200
          }
      ]

}
const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_FORM_DATA') {
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
    return state;
}

export default rootReducer;