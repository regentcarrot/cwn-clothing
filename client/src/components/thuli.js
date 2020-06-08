import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';






export default class Thuli extends React.Component{



render() {

return (<section className="mee p-5 mb-5">
<div className="container">
  <div className="row align-items-center mb-5">
    <div className="col-md-6 mx-auto text-center mb-5">
      <h1 className="mycolor">About Me</h1>
      <p className="lead text-white">I am a full stack Web & Software developer based in London that can craft and architect beautiful, functional, engaging Web Applications and deliver digital consultancy for start-ups and already established businesses</p>
      <a href="#" className="btn btn-lg btn-primary m-2">Read More</a>
    </div>
  </div>
</div>
</section>

)}

}