export const addItemToCart =(cartItems, cartItemToAdd)=> {

const existingCartItem = cartItems.find(cartItem=> cartItem.id===cartItemToAdd.id)
const invy= cartItemToAdd.inventory> cartItemToAdd.quantity

if (existingCartItem) {

    return cartItems.map(cartItem=> 
    cartItem.id===cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem)

    }

return [...cartItems, {...cartItemToAdd, quantity: 1}]

}

export const decreaseCart= (cartItems, decreaseItem)=> {

    const existingCartItem = cartItems.find(cartItem=> cartItem.id===decreaseItem.id)

    if (existingCartItem.quantity===1) {
        return cartItems.filter(cartItem=> cartItem.id!==decreaseItem.id)

    }

return cartItems.map(cartItem=>cartItem.id===decreaseItem.id?{...cartItem, quantity:cartItem.quantity-1}: cartItem)

}