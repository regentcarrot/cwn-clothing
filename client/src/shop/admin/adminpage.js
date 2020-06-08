import React from 'react';
import ItemList from './itemList';
import {connect} from 'react-redux';
import {fetchCategorySuccess} from '../../redux/data/data.actions';
import {createStructuredSelector} from 'reselect';
import {  selectIsDataLoaded, selectIsDataFetching} from '../../redux/data/data.selector';
import {Route} from 'react-router-dom';
import ItemPage from './itemoverview';
import AddItem from './additem';
import AddPage from './additem-page';
import Editpage from './edititem-page'
import WithSpinner from '../with-spinner/with-spinner';
import AddCatergory from './addcategory';



const ItemPageWithSpinner= WithSpinner(ItemPage);
const AddPageWithSpinner= WithSpinner(AddPage);
const EditpageWithSpinner= WithSpinner(Editpage)

class AdminPage extends React.Component {

  


componentDidMount(){

   const {fetchCategorySuccess}= this.props
   fetchCategorySuccess()
  

  
}

render(){
    const {match, isDataFetching, isDataLoaded}= this.props
  
  
    console.log(match)

//     console.log(dataCollections)    

   

    return (
    <div>
    {/*data.map(({id,...otherProps})=> (<ItemList key={id} id={id} {...otherProps} />)) */}
    <Route exact path={`${match.path}/`} render={(props)=><ItemPageWithSpinner isLoading={isDataFetching} {...props}/>} />
    <Route path={`${match.path}/additem`} render={(props)=><AddPageWithSpinner isLoading={!isDataLoaded} {...props}/>}/>
    <Route path={`${match.path}/edit/:id`} render={(props)=><EditpageWithSpinner isLoading={!isDataLoaded} {...props}/>}/>
    </div>)

}


}


const mapDispatchToProps= (dispatch)=> ({

 
    fetchCategorySuccess: ()=> dispatch(fetchCategorySuccess())

})

const mapStateToProps= createStructuredSelector({

    isDataFetching: selectIsDataFetching,
    isDataLoaded: selectIsDataLoaded,
})


export default connect(mapStateToProps, mapDispatchToProps) (AdminPage);

