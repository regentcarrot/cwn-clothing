import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import team1 from '../images/team1.jpg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';



const Devs = [
    {
    id:1,
    name: "Peter", 
    type: "Fulstack Developer",
    age: 33,
    location:"London",
    employment: "freelancer",
    url: team1,
    featured:true,
    salary: 40000,
    contract:600
    }, 
    {
    id:2,
    name: "Kudzi",
    type: "Cyber-Security Expert",
    age: "20",
    location: "London",
    employment: "freelancer",
    url: team2,
    featured:true,
    salary: 20000,
    contract:100
    },
    {
        id:3,
        name: "Dan",
        type: "Front-End Developer",
        age: "23",
        location: "London",
        employment: "freelancer", 
        url: team3,
        featured:false,
        salary: 20000,
        contract:100
    },
    {
        id:4,
        name: "Adam",
        type: "Graphic Designer",
        age: "35",
        location: "London",
        employment: "freelancer", 
        url: team3,
        featured:false,
        salary: 35000,
        contract:400
    },
    {
        id:5,
        name: "Martin",
        type: "Front-End Developer",
        age: "29",
        location: "London",
        employment: "freelancer", 
        url: team3,
        featured:false,
        salary: 30000,
        contract:300
    },
]


export default Devs;