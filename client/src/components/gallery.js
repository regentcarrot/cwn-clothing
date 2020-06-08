import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import {PeopleProvider, PeopleContext, PeopleConsumer} from './context1';





export default class Gallery extends React.Component{



render() {
return (
  <PeopleConsumer>
  { (value=>{
  
    console.log(value)
    
    return <section id="gallery" className="gallery py-5">
    <div className="container">
     
     
     
      <div className="row">
       
        <div className="col-10 col-lg-6 mx-auto my-3">
          <div className="gallery-img-container">
            <img
              src="images/indesign.jpg"
              className="img-fluid gallery-img"
              alt="gallery img"
            />
            <a href="#" className="text-capitalize gallery-info p-2">room</a>
            <span className="gallery-icon"> <FaPlus/> </span>
          </div>
        </div>
        
        <div
          className="col-10 col-lg-6 mx-auto my-3 d-flex flex-column justify-content-between"
        >
  
          <div className="row">
       
            <div className=" col-lg-6  my-3 my-lg-0">
              <div className="gallery-img-container">
                <img
                  src="images/indesign.jpg"
                  className="img-fluid gallery-img"
                  alt="gallery img"
                />
                <a href="#" className="text-capitalize gallery-info p-2">room</a>
                <span className="gallery-icon">
                  <FaPlus/>
                </span>
              </div>
            </div>
            
            <div className=" col-lg-6  my-3 my-lg-0">
              <div className="gallery-img-container">
                <img
                  src="images/indesign.jpg"
                  className="img-fluid gallery-img"
                  alt="gallery img"
                />
                <a href="#" className="text-capitalize gallery-info p-2">room</a>
                <span className="gallery-icon">
                  <FaPlus/>
                </span>
              </div>
            </div>
         
          </div>
         
          <div className="row">
            
            <div className=" col-lg-6  my-3 my-lg-0">
              <div className="gallery-img-container">
                <img
                  src="images/indesign.jpg"
                  className="img-fluid gallery-img"
                  alt="gallery img"
                />
                <a href="#" className="text-capitalize gallery-info p-2">room</a>
                <span className="gallery-icon">
                  <FaPlus/>
                </span>
              </div>
            </div>
           
            <div className=" col-lg-6  my-3 my-lg-0">
              <div className="gallery-img-container">
                <img
                  src="images/indesign.jpg"
                  className="img-fluid gallery-img"
                  alt="gallery img"
                />
                <a href="images/indesign.jpg" className="text-capitalize gallery-info p-2">room</a>
                <span className="gallery-icon">
                  <FaPlus/>
                </span>
              </div>
            </div>
           
          </div>
          
        </div>
      </div>
    </div>
  </section>
  
  
  })
   }
    </PeopleConsumer>

   )

}






}


