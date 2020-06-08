import React, {Component} from 'react';
import PeopleFilter from './peopleFilter';
import Person from './person';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import {PeopleProvider, PeopleContext, PeopleConsumer} from './context1';


const PeopleList=({people})=> {
if (people.length===0){
return (<h3>Unfortunately no people match your search parameter</h3>)

}


return (
    <section>

<div>

Hello from People List

</div>
{people.map(item=>{
console.log(item)
    return <Person key="item.id" person={item}/>
    
})}

</section>)



}

export default PeopleList;