
export const toggleCartHidden =()=> ({

    type: 'TOGGLE_CART_HIDDEN',

})

export const clearCart= ()=>({

    type: 'CLEAR_CART',
})


export const addItem= (item)=>({

    type: 'ADD_ITEM',
    payload: item

})

export const removeItem=(item)=>({

    type: 'REMOVE_ITEM',
    payload: item


})

export const decreaseItems=(item)=> ({
type: 'DECREASE_ITEMS',
payload: item

})


