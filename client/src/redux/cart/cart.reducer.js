import {addItemToCart, decreaseCart} from './cart.utils';

const INITIAL_STATE = {

    hidden: true,
    cartItems: []
} ; 


const cartReducer = (state= INITIAL_STATE, action)=> {
switch(action.type) {
case 'TOGGLE_CART_HIDDEN':
    return {
        ...state,
        hidden: !state.hidden
    };
    
        
case 'ADD_ITEM':
    return {
       ...state, 
       cartItems: addItemToCart(state.cartItems, action.payload)
   
    }

case 'DECREASE_ITEMS':
    return {
        ...state,
        cartItems:decreaseCart(state.cartItems, action.payload)

    }

case 'REMOVE_ITEM':
        return {
            ...state, 
         

            cartItems: state.cartItems.filter((cartItem)=> cartItem.id!==action.payload.id)
        };

case 'CLEAR_CART':
    return {
        ...state,
        cartItems: []
    }
    default:
return state;

}

};

export default cartReducer;