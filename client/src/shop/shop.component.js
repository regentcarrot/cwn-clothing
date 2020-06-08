import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionOverview from './collections-overview/collection-overview';
import {Route} from 'react-router-dom';
import {firestore, convertCollectionSnapshotToMap} from '../firebase/firebase.utils'
import CollectionPage from './collection/collection';
import collectionContainer from './collection/collection.container';
import {fetchCollectionsStartAsync} from '../redux/shop/shop.actions';
import WithSpinner from './with-spinner/with-spinner';
import {selectIsCollectionFetching} from '../redux/shop/shop.selector';

const CollectionOverViewWithSpinner= WithSpinner(CollectionOverview);
const CollectionPageWithSpinner= WithSpinner(collectionContainer)


class ShopPage extends React.Component {



// unsubscribeFromSnapshot= null;

componentDidMount(){
  const {fetchCollectionsStartAsync}= this.props;
  fetchCollectionsStartAsync();
}

    render(){
const {match, isCollectionFetching}= this.props;

return (
    <div className= 'shop-page'>
    <Route exact path={`${match.path}`} render={(props)=><CollectionOverViewWithSpinner isLoading={isCollectionFetching} {...props}/>} />
    <Route path={`${match.path}/:collectionID`} render={(props)=><CollectionPageWithSpinner isLoading={isCollectionFetching} {...props}/>}/>
    </div>
    
    )

    }



}

const mapStateToProps= createStructuredSelector({

    isCollectionFetching: selectIsCollectionFetching,

})

const mapDispatchToProps= (dispatch)=>({
    fetchCollectionsStartAsync: ()=> dispatch(fetchCollectionsStartAsync())

})





export default connect(mapStateToProps, mapDispatchToProps) (ShopPage);