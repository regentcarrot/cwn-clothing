import React from 'react';
import AddItem from './additem'; 
import EditItem from './edititem';
import {connect} from 'react-redux';
import { addCollection, fetchCategorySuccess, addItemSuccess, addField, updateCollectionSuccess} from '../../redux/data/data.actions';
import dataReducer from '../../redux/data/data.reducer';




const Editpage= (props)=>{ 
    
    console.log(props.data.id)
    return (

    <div>This is from my my edit item component
   

 <EditItem
 data={props.data}
 dataCollection={props.dataCollection}
 onAdd={(item)=> {
        
  props.updateCollectionSuccess(item)
         props.history.push('/adminpage');
        //    console.log(dataCollection)
    
        }}/>
    </div>

);
    }

const mapStateToProps = (state, props)=>({
dataCollection: state.data.dataCollections,
data: state.data.dataCollections.find((item)=>  item.id.toString()===props.match.params.id),
})

const mapDispatchToProps= (dispatch)=> ({

addCollection: (item)=> dispatch(addCollection(item)),
addItemSuccess: (item)=>dispatch(addItemSuccess(item)),
addField: (item)=> dispatch(addField(item)),
fetchCategorySuccess: ()=> dispatch(fetchCategorySuccess()), 
updateCollectionSuccess: (update)=> dispatch(updateCollectionSuccess(update))

})

export default connect(mapStateToProps, mapDispatchToProps) (Editpage)