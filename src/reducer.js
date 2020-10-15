import { DECREASE, INCREASE, CLEAR_CART, DELETE } from "./actions";


function reducer(state, action) {
    if(action.type === DECREASE) {
        console.log("Decreased")
    }
    if(action.type === INCREASE) {
        console.log("Increased")
    }
    if(action.type === CLEAR_CART) {
        return {
            ...state, cart: []
        }
    }
    if(action.type === DELETE) {
        return {
            ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id )
        }
    }
    return state;
  }

  export default reducer;