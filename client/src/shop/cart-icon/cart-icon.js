import React from 'react';
import {selectCartItemsCount, selectCartItems} from '../../redux/cart/cart.selectors'

import {connect} from 'react-redux';
import {toggleCartHidden} from './../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../images/cart-icon.svg';
import './cart-icon.styles.scss'; 

const CartIcon=({toggleCartHidden, itemCount})=> {
    return (
<div className='cart-icon' onClick={toggleCartHidden} >
<ShoppingIcon className='shopping-icon'/>
<span className='item-count'>{itemCount}</span>
</div>)

}


const mapDispatchToProps = (dispatch)=> ({

    toggleCartHidden: ()=>dispatch(toggleCartHidden())

})

const mapStateToProps= (state)=> ({
itemCount: selectCartItemsCount(state)

})

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon);