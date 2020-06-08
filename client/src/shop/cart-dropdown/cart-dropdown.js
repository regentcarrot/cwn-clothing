import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length? (cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        ): (<span className='empty-message'>Your cart is empty</span>) }
      </div>
      <CustomButton onClick={()=> 
        {history.push('/checkout'); 
        {toggleCartHidden()}}}>
      
      CHECKOUT</CustomButton>
    </div>
  );
  
  const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden()),
  });
  
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));