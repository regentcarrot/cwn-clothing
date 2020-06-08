import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../images/logo.svg';
import ShopPage from '../shop.component';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';




const ShopHeader= ({currentUser, toggleCartHidden})=> (

<div className='header'>
<Link className='logo-container' to="/shop">

<Logo className='logo'/>
</Link>
<div className="options">
<Link className='option' to='/shop'>Shop</Link>
<Link className='option' to='/shop'>Contact</Link>
{currentUser?<div className='option' onClick={()=>auth.signOut()}>Sign Out</div>: (<Link className='option' to="/signin">Sign In</Link>)}
<CartIcon/>
</div>
{toggleCartHidden?null: <CartDropdown/>}
</div>



)

const mapStateToProps= createStructuredSelector({
currentUser: selectCurrentUser,
toggleCartHidden: selectCartHidden

})

export default connect(mapStateToProps) (ShopHeader);