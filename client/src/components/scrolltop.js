import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {FiTwitter, FiMenu, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import $ from "jquery";
import '../styles/home.css';

class ScrollTop extends React.Component{

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

      topFunction=()=> {

        document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }


render(){
return(<div>
    <button 
   className= {this.state.scroller > 20 ? 'myBtn' : 'myBtn2'}
    onClick={this.topFunction} title="Go to top">Top</button>
    
    </div>
    
    
    
   


)



}



}




export default ScrollTop;
