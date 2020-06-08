import React from 'react';
import {BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Homepage from './components/home';
import HomePage from './shop/homepage/homepage'
import AboutUs from './components/aboutus';
import Portfolio from './components/portfolio';
import ContactUs from './components/contactus';
import NotFound from './components/notfound';
import Header from './components/header';
import ShopHeader from './shop/header/shopheader';
import ShopPage from './shop/shop.component';
import CheckoutPage from './shop/checkout/checkout';
import {selectCollectionsForPreview} from './redux/shop/shop.selector'; 
import {createStructuredSelector} from 'reselect';

import FirstNav from './components/firstnav';
import Nav2 from './components/testnav';
import Navbar from './components/mainnav';
import { FaShoppingBag } from 'react-icons/fa';
import SignInAndSignUpPage from './shop/sign-in-sign-up/sign-in-sign-up'
import {auth, addCollectionAndDocuments} from './firebase/firebase.utils';
import firebase from 'firebase/app';
import {createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import addpage from './shop/admin/additem-page';
import AdminPage from './shop/admin/adminpage';
import Editpage from './shop/admin/edititem-page';
import {fetchCategorySuccess} from '../src/redux/data/data.actions';
import {selectDataCollections, selectIsDataFetching} from '../src/redux/data/data.selector';
import WithSpinner from './shop/with-spinner/with-spinner';

const CheckoutPageWithSpinner= WithSpinner(CheckoutPage);


class AppRouter extends React.Component {


unsubscribeFromAuth=null;

componentDidMount(){

    

    const {setCurrentUser, collectionsArray, fetchCategorySuccess} = this.props

  

this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{

if (userAuth){
    
    const userRef= await createUserProfileDocument(userAuth)

    userRef.onSnapshot(snapshot=>{


setCurrentUser({id:snapshot.id, ...snapshot.data()});
// addCollectionAndDocuments('collections', collectionsArray.map(({title, items})=>({title, items})));
fetchCategorySuccess()

    })
}else{
setCurrentUser(userAuth)}
    })
}

componentWillUnmount(){

    this.unsubscribeFromAuth();
}

render () {
    const {isDataFetching}= this.props
return (<BrowserRouter>
<div>

<ShopHeader/>

<Switch>
<Route path="/" component= {HomePage} exact={true}/>
<Route path="/aboutus" component= {AboutUs}/>
<Route path="/portfolio" component= {Portfolio}/>
<Route path="/contactus" component= {ContactUs}/>
<Route path="/shop" component={ShopPage}/>
{/*<Route exact path="/addItem" component={addpage}/> */}
<Route path="/adminpage" component={AdminPage}/>
{/*<Route exact path='/adminpage' render={(props)=><ItemPageWithSpinner isLoading={isDataFetching} {...props}/>} />*/}
<Route path="/edit/:id" component={Editpage}/>
<Route exact path="/checkout" /*component={CheckoutPage}*/ render= {(props)=> <CheckoutPageWithSpinner isLoading={isDataFetching} {...props}/>}/>
<Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to='/shop'/>):(<SignInAndSignUpPage/>)}/>
<Route component= {NotFound}/>
</Switch>
</div>
</BrowserRouter>


);
}
}

const mapStateToProps = createStructuredSelector({

currentUser: selectCurrentUser,
collectionsArray: selectCollectionsForPreview,
isDataFetching: selectIsDataFetching,

})

const mapDispatchToProps=(dispatch)=> ({
setCurrentUser: user=> dispatch(setCurrentUser(user)),
fetchCategorySuccess: ()=> dispatch(fetchCategorySuccess())
})

export default connect(mapStateToProps, mapDispatchToProps) (AppRouter);