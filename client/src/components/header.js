import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';
import {FiTwitter, FiMenu, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaArrowDown, FaArrowAltCircleDown} from "react-icons/fa";
import Navbar from './mainnav';


const Header = ()=> (
    
  
<header className="header-area">

<div className="header-overlay">
<div className="container">
<div className="row">
    <div className="col-md-12">
    <Navbar/>
    </div>
</div>
</div>


</div>


</header>


);

export default Header;
