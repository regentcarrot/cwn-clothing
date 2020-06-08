import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FiTwitter, FiMenu, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import {FaWordpress, FaWordpressSimple, FaPhp, FaReact, FaHtml5, FaCss3Alt, FaPython} from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBAnimation } from "mdbreact";



const AnimationPage = () => {
    return (
        <MDBAnimation className="text-center" type="bounce" infinite>
            Logo
        </MDBAnimation>
    );
};

export default AnimationPage;