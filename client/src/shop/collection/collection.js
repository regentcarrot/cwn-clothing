import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
import CollectionItem from '../collection-item/collection-item';
import CollectionFilter from '../collection-filer/collection.filter';
import {createStructuredSelector} from 'reselect';
import {CollectionContext} from '../../context/collection.context';
import {useContext} from 'react';


const CollectionPage=({sortedItems})=> {
const context = useContext(CollectionContext);

     
  const tempItems= sortedItems;
console.log(tempItems)
  
   return (




<div className='items'>
{
tempItems.map(tempItem=>
  <CollectionItem key={tempItem.id} item={tempItem}/>)
}
</div>


)}

export default CollectionPage;