import React, {Component} from 'react';
import PeopleFilter from './peopleFilter';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import {PeopleProvider, PeopleContext, PeopleConsumer} from './context1';

const Person=({person})=>{
const {url, age, name}= person
console.log(person)

    return(
        <article>
        <div className="img-container">
        
       <img src={url} />
        
        </div>
        </article>


    )

}


export default Person;