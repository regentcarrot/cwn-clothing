import React, {Component} from 'react';
import Person from './person';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import {PeopleProvider, PeopleContext, PeopleConsumer} from './context1';


export default class FeaturedPeople extends React.Component{

    static contextType= PeopleContext;

    render(){
let {featuredpeople:people} = this.context;
console.log(people);
people= people.map(person=>{
    return <Person key={person.id} person={person}/>
})
    return(
        <section><div>
        
        <h3>Hello from Featured Rooms</h3>
        {people}
        </div>
</section>


    )

    }
}


