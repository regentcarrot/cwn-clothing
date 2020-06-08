import React from 'react';

import './checkout.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCartTotal} from '../../redux/cart/cart.selectors';
import stripeCheckoutButton from '../stripe-button/stripe-button';
import CheckoutItem from '../checkout-item/checkout-item';
import  {removeItem, clearCart} from '../../redux/cart/cart.actions';
import StripeCheckoutButton from '../stripe-button/stripe-button';
import {selectDataCollections} from '../../redux/data/data.selector';
import {updateInventorySuccess} from '../../redux/data/data.actions';
import {selectCurrentUser} from '../../redux/user/user.selectors'



class CheckoutPage extends React.Component  { 
   
    render() {
        
    const {cartItems, total, history, clearCart, dataCollections, selectCurrentUser}= this.props
console.log(cartItems)
console.log(selectCurrentUser)

const test = cartItems.map((ci)=>{
const tempInfo= {time:new Date()}

return {...ci,...tempInfo}

})

console.log(test);
const dbdata= cartItems.find(ci=> ci.quantity>ci.inventory)

console.log(dbdata)
    return (

<div className='checkout-page'>
<div className='checkout-header'>

<div className="header-block">
<span>Product</span>
</div>

<div className="header-block">
<span>Description</span>
</div>

<div className="header-block">
<span>Quantity</span>
</div>

<div className="header-block">
<span>Remaining Stock</span>
</div>

<div className="header-block">
<span>Price</span>
</div>



<div className="header-block">
<span>Remove</span>
</div>


</div>

{cartItems.map(cartItem=><CheckoutItem key= {cartItem.id} cartItem={cartItem} dataCollections={dataCollections}/>)}
<div className='total'><span>TOTAL: £{total}</span></div>
{selectCurrentUser?<div>
{dbdata? `The quantity for one of your requested items exceeds remaining stock. Please adjust!`:<StripeCheckoutButton price={total} history= {history} cartItems={cartItems} clearCart={clearCart} dataCollections={dataCollections} />}
</div>: 'Please Log in to proceed with payment'}</div>

)}

    }

const mapStateToProps = createStructuredSelector({
cartItems: selectCartItems,
total: selectCartTotal,
dataCollections:selectDataCollections,
selectCurrentUser: selectCurrentUser



})

const mapDispatchToProps= (dispatch)=>({

    clearCart: ()=>dispatch(clearCart()), 
    updateInventorySuccess: (updates)=> dispatch(updateInventorySuccess(updates))

})


export default connect(mapStateToProps, mapDispatchToProps) (CheckoutPage);