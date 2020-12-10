const initialState = {
    posts: [
        {id: '1', title: 'Sudam Yasodya', body: 'Hello me Sudam Yasodya love to crush codes'},
        {id: '2', title: 'Sheen Perera', body: 'Hello me Sudam Yasodya love to play game'},
        {id: '3', title: 'Ghost Ghost', body: 'Hello me Sudam Yasodya love to listen music'}
    ]
}
const rootReducer = (state = initialState, action) => {
    return state;
}

export default rootReducer;