import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateInventorySuccess, addOrderSuccess} from '../../redux/data/data.actions';


const StripeCheckoutButton = ({ price, history, cartItems, clearCart, dataCollections, addOrderSuccess, updateInventorySuccess}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_jaIMIqgeBkQ4SlqiMOtIcFlU00yWyiux9P';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
        history.push("/");
       console.log(token);
       console.log(cartItems); 
       cartItems.map(cartItem=> updateInventorySuccess(cartItem))
      addOrderSuccess(cartItems)
       console.log(dataCollections)
      //  clearCart();
        
        
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
    currency='GBP'
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      
    />
  );
};

const mapDispatchToProps= (dispatch)=>({
   updateInventorySuccess: (updates)=> dispatch(updateInventorySuccess(updates)),
   addOrderSuccess: (product)=> dispatch(addOrderSuccess(product)),
})

export default connect(null, mapDispatchToProps) (StripeCheckoutButton);