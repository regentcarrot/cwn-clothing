import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Item from './item';
import {deleteCollection, deleteCollectionSuccess, updateCollectionSuccess} from '../../redux/data/data.actions';


const ItemList = ({id,
    match,
    imageUrl,
    price,
    reff,
    name,
    size, deleteCollectionSuccess})=>

{
    
    console.log(name)
   return (

    <div>
    <Link to={`adminpage/edit/${id}`}>{name}</Link> -{price}-{size}-{id}-{reff}<button onClick={()=> deleteCollectionSuccess(id, reff)}>x</button>

  
 
    </div>


)}



const mapDispatchToProps = (dispatch)=> ({
    deleteCollection: (id)=>dispatch(deleteCollection(id)),
    deleteCollectionSuccess: (id, reff)=>dispatch(deleteCollectionSuccess(id, reff)),
    updateCollectionSuccess: (updates)=> dispatch(updateCollectionSuccess(updates))
    
    })
    
    export default connect(null, mapDispatchToProps) (ItemList)
