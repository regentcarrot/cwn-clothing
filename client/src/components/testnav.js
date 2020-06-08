import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {FiTwitter, FiMenu, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import $ from "jquery";

class Nav2 extends React.Component{

    state = { scroller: 0 };



    handleScroll = () => {
        this.setState({ scroller: document.documentElement.scrollTop });
      };


      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
  
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }  


render(){
return(<nav className=  {this.state.scroller > 200 ? 'navbar bg-secondary py-3 navbar-light navbar-expand-sm sticky-top' : 'navbar py-3 navbar-light navbar-expand-sm sticky-top'}>

<a href="#" className="navbar-brand text-uppercase font-italic"  >first website</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarlinks">
<span className="navbar-toggler-icon"></span>
</button><div className="collapse navbar-collapse" id="navbarlinks"><ul className="navbar-nav">

<li className="nav-item active"> <Link to="/" className="nav-link" >Home</Link>
</li>
<li className="nav-item"> <Link to="/portfolio" className="nav-link">Portfolio</Link>
</li>
<li className="nav-item"> <Link to="aboutus" className="nav-link">About Us</Link>
</li>
<li className="nav-item"> <Link to="/contactus" className="nav-link">Contact Us</Link>
</li>
</ul></div>
</nav>
    
   


)



}



}




export default Nav2;
