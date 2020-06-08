import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {FiTwitter, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import {FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import { MDBAnimation } from "mdbreact";


const Footer = ()=> (
    
   
    <footer id="footer-area" class="footer-area pt-4 pb-4 border-top">
    <div class="container">
    <div class="row align-items-center">
    <div class="col-12 mx-auto text-center">
    <div class="social_logo ">
    <p class="pb-2 "><MDBAnimation className="text-center" type="bounce" infinite>
    Logo
</MDBAnimation></p>
    
    </div>
    </div>
    <div class="col-12 text-center gcolor"><div>
    <ul class="list-inline m-0">
    <li class="list-inline-item fbook"><a className="tcolor" href="#">
    <FaFacebookSquare/></a></li>
    <li class="list-inline-item insta"><a className="tcolor" href="#"><FiInstagram/></a></li>
    <li class="list-inline-item twit"><a className="tcolor" href="#"><FaTwitterSquare/></a></li>
    </ul>
    </div>
    <p class="copyright mr-auto mt-2">© 2020. All Rights Reserved. Created by <a className="gcolor" target="_blank" href="#">Peter Stacks</a></p>
    </div></div></div>
    </footer>

);

export default Footer;
