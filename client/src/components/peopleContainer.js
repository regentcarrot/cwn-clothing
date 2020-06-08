import React, {Component} from 'react';
import PeopleFilter from './peopleFilter';
import PeopleList from './peopleList';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import {PeopleProvider, PeopleContext, PeopleConsumer} from './context1';


const PeopleContainer =()=> {



return (
<PeopleConsumer>{(value)=>{

    const {featuredpeople, people,sortedpeople}= value

    console.log(sortedpeople)
    return (
        <div>

        Hello from People Container
        <PeopleFilter people={people}/>
        <PeopleList people={sortedpeople}/>
        </div>

    )
}}


</PeopleConsumer>)



}

export default PeopleContainer;