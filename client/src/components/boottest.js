import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {FiTwitter, FiMenu, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';



const Boottest = ()=> (
    
   
   
    <section id="team" className="bg-light py-5">
    <div className="container">
    <div className="row">
        <div className="col-md-6 col-lg-4 my-4">
        <div className="card shadow text-center"><div className="icon mt-4"> <img src="images/supermarket3.png" alt="member" className=" img-fluid services-icon icon-circle"/>  </div><div className="card-body">
            <h5 className="card-title text-capitalize">e-commerce</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, laborum?</p>
            <a href="" className="btn btn-outline-warning text-uppercase">press here</a>
        </div>
        </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4">
        <div className="card shadow text-center"><div className="icon mt-4"> <img src="images/responsive1.png" alt="member" className=" img-fluid services-icon icon-circle"/>  </div><div className="card-body">
            <h5 className="card-title text-capitalize">Responsive</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, laborum?</p>
            <a href="" className="btn btn-outline-warning text-uppercase">press here</a>
        </div>
        </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4">
        <div className="card shadow text-center"><div className="icon mt-4"> <img src="images/uiux2.png" alt="member" className=" img-fluid services-icon icon-circle"/>  </div><div className="card-body">
            <h5 className="card-title text-capitalize">UI/UX</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, laborum?</p>
            <a href="" className="btn btn-outline-warning text-uppercase">press here</a>
        </div>
        </div>
        </div>
    </div>
</div>
    </section>

);

export default Boottest;
