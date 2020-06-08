import React from 'react';
import './preview-styles.scss';

import CollectionItem from '../collection-item/collection-item';


// this is the shop page
const CollectionPreview= ({title, items, match, history, routeName})=> {
   console.log(`${match.params}`)
  return (
<div className="collection-preview">

<h1 className="title" onClick={()=>history.push(`${match.url}/${routeName}`)} >{title}</h1>
<div className='preview'>
{items.filter((item,index)=> index<4).map((item)=> (
   <CollectionItem key={item.id} item={item} />
   
   ) 

)}
</div>

</div>



)

}



export default CollectionPreview;