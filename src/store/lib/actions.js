import { v4 as uuidv4 } from 'uuid';

/* Action types */
export const actions = {
    ADD_TO_CART: "ADD_TO_CART",
    UPDATE_CART: "UPDATE_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    SAVE_CART: "SAVE_CART",
    RESET_CART: "RESET_CART"
}

/* Action Creators */ 
export function addToCart(item, unit_price, add_id, no_travellers,Current_date,type,total_price,units,
                          checkin_date,checkin_time,checkin_location,checkout_date,checkout_time,checkout_location) {
    return {
        type: actions.ADD_TO_CART,
        payload: { id: uuidv4(), details: item,unit_price: unit_price,  add_id:add_id,
            no_travellers:no_travellers,Current_date:Current_date,type:type,
            total_price:total_price,units:units,checkin_date: checkin_date,
            checkin_time:checkin_time,checkin_location:checkin_location,checkout_date:checkout_date,
            checkout_time:checkout_time,checkout_location:checkout_location
        }
    }
}

export function updateCart(id, quantity) {
    return {
        type: actions.UPDATE_CART,
        payload: {id: id, quantity: quantity}
    }
}

export function removeFromCart(item) {
    return {
        type: actions.REMOVE_FROM_CART,
        payload: item
    }
}

export function saveCart(items) {
    return {
        type: actions.SAVE_CART,
        payload: { items: items }
    }
}

export function resetCart() {
    return {
        type: actions.RESET_CART,
    }
}



