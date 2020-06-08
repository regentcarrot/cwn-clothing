import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {FiTwitter, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import {FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import { MDBAnimation } from "mdbreact";


const Services = ()=> (
    <section>
    <div className="serv py-5"><h2 className="text-center text-white">SERVICES</h2></div>
    <div className="container">
    
    <div className="row">
        <div className="col-md-4 col-sm-6 my-3">
        <div className="card shadow-lg text-center border-0 fadeInUp slow"><img src= "images/software3.jpg" className="w-100"/>
        <div className="card-body"><a href="#"><h5 className="card-title">Web Development</h5></a>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, temporibus.</p>
        </div>
        </div>
        </div>
    
        <div className="col-md-4 col-sm-6 my-3">
        <div className="card shadow-lg text-center border-0 fadeInUp slow"><img src= "images/native1.jpg" className="w-100"/>
        <div className="card-body"><a href="#"><h5 className="card-title">Mobile Programing</h5></a>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, temporibus.</p>
        </div>
        </div>
        </div>

        <div className="col-md-4 col-sm-6 my-3">
        <div className="card shadow-lg text-center border-0 fadeInUp slow"><img src= "images/seo6.jpg" className="w-100"/>
        <div className="card-body"><a href="#"><h5 className="card-title">SEO</h5></a>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, temporibus.</p>
        </div>
        </div>
        </div>

        <div className="col-md-4 col-sm-6 my-3">
        <div className="card shadow-lg text-center border-0 fadeInUp slow"><img src= "images/cybersecurity4.jpg" className="w-100"/>
        <div className="card-body"><a href="#"><h5 className="card-title">Cyber Security</h5></a>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, temporibus.</p>
        </div>
        </div>
        </div>

    </div>
    
    
    
    </div>
    
    </section>
   
   

);

export default Services;
