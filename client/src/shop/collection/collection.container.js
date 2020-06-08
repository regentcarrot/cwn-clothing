import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
import CollectionItem from '../collection-item/collection-item';
import CollectionFilter from '../collection-filer/collection.filter';
import {createStructuredSelector} from 'reselect'
import CollectionPage from './collection';
import {CollectionContext} from '../../context/collection.context';

class CollectionContainer extends React.Component  {
  state={
      catItems: this.props.collection,
    sortedItems:[],
    type:'all',
    price: 0,
    minPrice:0,
    maxPrice:0, 
  }

  componentDidMount(){



const tempItems = this.state.catItems.items
let maxPrice= Math.max(...tempItems.map(item=>{
    return item.price
    
    }));
this.setState({sortedItems: tempItems, 
                maxPrice,
                price: maxPrice })

  }

  handleChange=(event)=> {
    const target=event.target
    const value= event.type==='checkbox'? target.checked: target.value;
    
    const name= event.target.name;
    
    console.log(value)

    this.setState({
            [name]:value
    }, this.filterItems)

}

filterItems=()=>{

    let {catItems,type, price } = this.state

    price= parseInt(price);

    let tempItems= catItems.items;

    if(type!=="all"){
tempItems= tempItems.filter((item)=>{return item.name===type})

    }

    // filter by price
    tempItems = tempItems.filter(item => item.price <= price);

    this.setState({sortedItems:tempItems})
    console.log(this.state)
}

    render(){
      const {collection, match}= this.props;
  const {title, items}= collection;


  
   return (

<div className= 'collection-page'>
<h2 className='title'>{title}</h2>
<CollectionContext.Provider value={{...this.state, handleChange:this.handleChange}}>
<CollectionFilter catItems={this.state.catItems}/>
<CollectionPage sortedItems={this.state.sortedItems} />
</CollectionContext.Provider>
</div>



)
}
}
const mapStateToProps = (state,ownProps) => ({

  collection: selectCollection(ownProps.match.params.collectionID)(state)

})

export default connect(mapStateToProps) (CollectionContainer);