
import React from 'react';
import ItemList from './itemList';
import {connect} from 'react-redux';
import {fetchCategorySuccess} from '../../redux/data/data.actions';
import {createStructuredSelector} from 'reselect';
import {  selectDataCollections, selectDataForPreview, dataToDelete, dataToDeleteNested } from '../../redux/data/data.selector';
import { render } from '@testing-library/react';
import { fetchCollectionsSuccess } from '../../redux/shop/shop.actions';
import WithSpinner from '../with-spinner/with-spinner';
import {  selectIsDataLoaded, selectIsDataFetching} from '../../redux/data/data.selector';



const ItemPage =({data, isDataFetching})=> {


    

    return (


    <div>

    
    { data.map(({id,...otherProps})=> (<ItemList key={id} id={id} {...otherProps} />))}
   
    
    </div>)




}




// const mapStateToProps=createStructuredSelector({

//     // dataCollections: selectDataForPreview,
//     // dataToDelete: dataToDelete, 
//     // dataToDeleteNested: dataToDeleteNested
// })

// const mapStateToProps = (state)=>({
    
//     isDataFetching: selectIsDataFetching,
//     isDataLoaded: selectIsDataLoaded,    
//     data: selectDataCollections
// })


const mapStateToProps= createStructuredSelector({

    data: selectDataCollections,
    isDataFetching: selectIsDataFetching,
    isDataLoaded: selectIsDataLoaded,
})


export default connect(mapStateToProps) (ItemPage);


