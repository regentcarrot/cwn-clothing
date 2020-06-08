import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteCollection} from '../../redux/data/data.actions'


const Item = ({item, deleteCollection})=>{
    
 const {name, id, price, imageUrl}= item   
    return (
<div>

<p>
{id}-{name}-{price}-
<button onClick={()=>deleteCollection(id)}>x</button>

{console.log(name)}

</p>

</div>

)};

const mapDispatchToProps = (dispatch)=> ({
deleteCollection: (id)=>dispatch(deleteCollection(id))

})

export default connect(null, mapDispatchToProps) (Item);


