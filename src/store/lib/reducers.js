import { actions } from './actions'

const initiaState = {
    items: JSON.parse(localStorage.getItem('items')) !== null
    ? JSON.parse(localStorage.getItem('items'))
    : []
}
const saveToLocalStorage = object => {
    localStorage.setItem('items', JSON.stringify(object))
}

const onlineStoreApp=(state = initiaState, action)=> {
    // console.log(state)
    switch (action.type) {
        case actions.ADD_TO_CART:
            return {...state, items: [...state.items, action.payload]};
        case actions.UPDATE_CART: 
            return {...state, items: state.items.map(item => {
                return item.id === action.payload.id
                ? {...item, quantity: action.payload.quantity}
                : item;
            })}
        case actions.REMOVE_FROM_CART: 
            return {...state, items: state.items.filter(item => { return item.id !== action.payload.id })}
        case actions.SAVE_CART: 
            saveToLocalStorage(action.payload.items)    
            return state
        case actions.RESET_CART: 
            saveToLocalStorage([]) // Clear LocalStorage
            return {...state, items: []} // Clear State
        default: 
            // console.log('test default') 
            return state
    }
}

export default onlineStoreApp;

