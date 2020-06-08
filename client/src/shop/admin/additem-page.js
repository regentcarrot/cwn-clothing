import React from 'react';
import AddItem from './additem';
import AddField from './addfield';
import {connect} from 'react-redux';
import { addCollection, fetchCategorySuccess, addItemSuccess, addField} from '../../redux/data/data.actions';
import dataReducer from '../../redux/data/data.reducer';
import { addItem } from '../../redux/cart/cart.actions';




const Addpage= ({dataCollection, firstitem, addItemSuccess, addField, addCollection, history})=>{ 

  
console.log(firstitem)

    return (

    <div>This is from my my add item component
    

 <AddItem 
 dataCollection={dataCollection}
 firstitem= {firstitem}
 
 
 onAdd={(item)=> {
       
  addItemSuccess(item)
         history.push('/adminpage');
           console.log('dataCollection')
    
        }} />
    </div>

);
    }

const mapStateToProps = (state)=>({
dataCollection: state.data.dataCollections,
firstitem: state.data.dataCollections.find((item) =>item.id==='6666')

})

const mapDispatchToProps= (dispatch)=> ({

addCollection: (item)=> dispatch(addCollection(item)),
addItemSuccess: (item)=>dispatch(addItemSuccess(item)),
addField: (item)=> dispatch(addField(item)),
fetchCategorySuccess: ()=> dispatch(fetchCategorySuccess())

})

export default connect(mapStateToProps, mapDispatchToProps) (Addpage)