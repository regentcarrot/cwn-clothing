
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import {FaArrowDown, FaArrowAltCircleDown} from "react-icons/fa";

export default class Corousel extends React.Component{



    render() {
    
    return (


<div className="container-fluid banner-overlay"><img src="images/banner_tl.png" className="banner-overlay-log"/>

<div className="row">

  <div className="col no-padding remove-pad">
  
    <div id="demo-slider" className="carousel slide" data-ride="carousel">



      
      <div className="carousel-inner">
        <div className="carousel-item item-1 active">
          <div className="carousel-caption mb-5 text-right">
            <h1 className="display-3 text-capitalize mb-2 text-light">I am Developer</h1>
            <a href="#" className="btn btn-lg mb-5 text-uppercase banner-btn">my work</a>
          </div>
        </div>
        <div className="carousel-item item-2">
          <div className="carousel-caption mb-5 text-center">
            <h1 className="display-3 text-capitalize mb-2 text-light">I am Designer</h1>
            <a href="#" className="btn btn-lg mb-5 text-uppercase banner-btn">my work</a>
          </div>
        </div>
        <div className="carousel-item item-3">
          <div className="carousel-caption mb-5 text-left">
            <h1 className="display-3 text-capitalize mb-2 text-light">I am Programmer</h1>
            <a href="#" className="btn btn-lg mb-5 text-uppercase banner-btn">my work</a>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#demo-slider" role="button" data-slide="prev">
<span className="carousel-control-prev-icon"></span>
<span className="sr-only">Previous</span>
</a>
      <a className="carousel-control-next" href="#demo-slider" role="button" data-slide="next">
<span className="carousel-control-next-icon"></span>
<span className="sr-only">Next</span>
</a>




    </div>
  </div>
  
</div>

</div>)
}
}