import React from 'react';
import {connect} from 'react-redux';
import './additem.styles.scss'; 
import FormInput from '../form-input/form-input';
import addpage from './additem-page'


const AddCategory=({data})=> {

    console.log(data)

return (<div>
    {data.map(item=> <li key={item.id}>{item.name}</li>)


    }
    
    </div>



)

}

const mapStateToProps =(state)=> ({
data: state.data.dataCollections

})




export default connect(mapStateToProps) (AddCategory)