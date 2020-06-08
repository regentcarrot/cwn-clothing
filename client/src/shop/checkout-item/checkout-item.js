

import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import  {removeItem, addItem, decreaseItems} from '../../redux/cart/cart.actions';


const CheckoutItem =({removeItem, decreaseItems, addItem, cartItem})=> {
   const {name, imageUrl,id, quantity,price, inventory}= cartItem;
  
   console.log(cartItem)
   
   
   return  (
<div className='checkout-item'>
<div className='image-container'>
<img src={imageUrl} alt='item'/>
</div>
<span className='name'>{name}</span>
<span className='quantity'><div onClick={()=> decreaseItems(cartItem)} className="arow"> &#10094; </div><span className='value'>{quantity}</span><div onClick={()=> addItem(cartItem)} className="arow"> &#10095;</div></span>
<span className='price'>{(inventory-quantity)>=0?(inventory-quantity):'OOS'}</span>
<span className='price'>{price}</span>
<div className='remove-button' onClick={()=>removeItem(cartItem)}>&#10005;</div>

</div>


)}

const mapDispatchToProps= (dispatch)=>({
    removeItem: (item)=> dispatch(removeItem(item)),
    decreaseItems: (item)=> dispatch(decreaseItems(item)),
    addItem: (item)=> dispatch(addItem(item)),
    })

export default connect(null,mapDispatchToProps)(CheckoutItem)