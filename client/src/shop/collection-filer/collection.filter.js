import React from 'react';
import {CollectionContext} from '../../context/collection.context';
import './collection.filter.styles.css';
import {useContext} from 'react';

const getUnique=(items, value)=> {
    return [...new Set(items.map(item=>{return item[value]}))]
    
    }


const CollectionFilter=({catItems})=> {
    const context= useContext(CollectionContext); 
    
  const {handleChange, type, price, minPrice, maxPrice}= context;








    

    let types=getUnique(catItems.items, 'name');
   

    types= ['all',...types];

    types= types.map((item, index)=> {
        return <option key={index} value={item}>{item}</option>
    })



return ( <section className="filter-container">
<h2 title="search rooms" />

<form className="filter-form">
{/*Select Type*/}
<div className="form-group">
<label htmlFor="type">Collection Type</label>
<select 
name="type" 
id="type" 
value={type}
className="form-control"
onChange={handleChange}>
{types}
</select>
</div>

{/*End of Select Type*/}

{/*Item Price*/}
<div className='form-group'>
<label htmlFor="price">
Item price £{price}
</label>
<input type="range" name="price" min={minPrice} max={maxPrice} 
        id="price" value={price} onChange={handleChange}
        className="form-control"/>
</div>

{/*end of Item Price*/}
</form>

 </section>   
    
    )



}



export default CollectionFilter