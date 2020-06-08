import React from 'react';
import {connect} from 'react-redux';
import './additem.styles.scss'; 
import FormInput from '../form-input/form-input';
import {fetchCategorySuccess, fetchCategory} from '../../redux/data/data.actions'
import addpage from './additem-page'


// const getUnique=(items, value)=> {
//     return [...new Set(items.map(item=>{return item[value]}))]
    
//     }

class AddItem extends React.Component{
    constructor(props){
        super(props);
this.state= { 
category: '',
name: '',
imageUrl: '',
price: '',
size: '',
inventory: '',
// id: props.data? props.data.id:'',
reff: props.data? props.data.reff:'',
myItems: props.dataCollection,

}
    }


componentDidMount(){






console.log(this.state.myItems)
}



handleChange = (event) => {
event.preventDefault();
    const target=event.target
    const value= event.type==='checkbox'? target.checked: target.value;
    
    const name= event.target.name;

    this.setState({[name]: value })

    

    }



onSubmit= (event)=>{
    event.preventDefault();
    // const {category, id, imageUrl, name, price, size, inventory} = this.state
    const target=event.target
    const value= event.type==='checkbox'? target.checked: target.value;
    
    const name= event.target.name;

   

    this.setState({[name]: value})
    this.props.onAdd({
        category: this.state.category,
        imageUrl: this.state.imageUrl, 
        name: this.state.name,
        price: this.state.price,
        size: this.state.size,
        inventory: this.state.inventory,
        // id: this.state.id,
        reff: this.state.reff
      
        
        
    })

// console.log(this.state)
     

}




//title
//items- id, imageurl, name, price, size, inventory


render() {

    
    const {category, imageUrl, name, price, size, inventory} = this.state


return(
    <div>
    <h2></h2>
    <div className='sign-up'>
<form onSubmit= {this.onSubmit}>



<FormInput type='text'
name='category'
value= {category}
onChange= {this.handleChange}
label= 'category'
/>

<FormInput type='text'
name='name'
value= {name}
onChange= {this.handleChange}
label= 'name'
/>



<FormInput type='text'
name='price'
value= {price}
onChange= {this.handleChange}
label= 'price'
/>

<FormInput type='text'
name= 'imageUrl'
value= {imageUrl}
onChange= {this.handleChange}
label= 'imageUrl'
/>

<FormInput type='text'
name= 'size'
value= {size}
onChange= {this.handleChange}
label= 'size'
/>


<FormInput type='text'
name= 'inventory'
value= {inventory}
onChange= {this.handleChange}
label= 'inventory'
/>

<button >Add Item</button>
</form>
</div>
</div>)

}


}



// const mapDispatchToProps= (dispatch)=> ({

//     fetchCategorySuccess: ()=> dispatch(fetchCategorySuccess())
    
//     })


export default AddItem