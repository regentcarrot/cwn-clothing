import React, {Component} from 'react';
import PeopleList from './peopleList';
import {useContext} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import {PeopleProvider, PeopleContext, PeopleConsumer} from './context1';

//get unique values
const getUnique=(items, value)=> {
return [...new Set(items.map(item=>{return item[value]}))]

}

const PeopleFilter =({people})=> {

const context= useContext(PeopleContext);
const {handleChange, type, capacity,price, minPrice, maxPrice, 
        minSize, maxSize, breakfast, pets}=context;

    const arr= [{first:"Peter", last:"Madz"}, {first:"Gab", last:"Garcia"}, {first:"sienna", last:"Madz"}]
   let testing= arr.map((item)=>{return item.first});
   console.log([...new Set(testing)])

        let types=getUnique(people, 'type');
   

        types= ['all',...types];

        types= types.map((item, index)=> {
            return <option key={index} value={item}>{item}</option>
        })
return (

<div>

Hello from People Filter

<form>
{/*Select Type*/}
<div className="form-group">
<label htmlFor="type">Room Type</label>
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
</form>

</div>

)



}

export default PeopleFilter;