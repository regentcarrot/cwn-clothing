import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';
import {FiTwitter, FiMenu, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";

class FirstNav extends React.Component {

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

      render() {
        return (
          

          <header className={this.state.scroller > 700 ? 'navbar2' : 'navbar1'}>
<div className="fixed">
<h3 className="navbar-logo">My Portfolio Site</h3>
<ul className="social-icons-menu">
            <li>
                <a href="#" ><FiInstagram/></a>
            </li>
            <li>
                <a href="#" ><FiLinkedin/></a>
            </li>
            <li>
                <a href="#" ><FiTwitter/></a>
            </li>
            <li>
                <a href="#" ><FiFacebook/></a>
            </li>
            <li className="social-icon-menu-item">
            <button><FiMenu/></button>
        </li>
        </ul>
        </div>



</header>


          )

}


}

    




export default FirstNav;