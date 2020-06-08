import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FiTwitter, FiMenu, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import {FaWordpress, FaCcStripe, FaPhp, FaReact, FaHtml5, FaCss3Alt, FaPython, FaBootstrap, FaJsSquare, FaAngular} from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import Slider from "react-slick";


export default class MultipleItems extends Component {
    render() {
      const settings = {
        arrows:false,
        infinite: true,
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true
      };
      return (
        <div>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <style>{cssstyle}</style>
        <div className="pt-5 gcolor text-center">
          <h2> Proficient with </h2></div>
          <Slider {...settings}>
            <div>
              <h3><FaWordpress/></h3>
            </div>
            <div>
              <h3><FaPhp/></h3>
            </div>
            <div>
              <h3><FaReact/></h3>
            </div>
            <div>
              <h3><FaHtml5/></h3>
            </div>
            <div>
              <h3><FaCss3Alt/></h3>
            </div>
            <div>
              <h3><FaPython/></h3>
            </div>
            <div>
              <h3><FaCcStripe/></h3>
            </div>
            <div>
              <h3><FaBootstrap/></h3>
            </div>
            <div>
              <h3><FaJsSquare/></h3>
            </div>
            <div>
              <h3><FaAngular/></h3>
            </div>
          </Slider>
        </div>
      );
    }
  }


  const cssstyle = `

h3 {
    
    color: #ff458a;
    font-size: 36px;
    line-height: 100px;
    margin: 0;
    padding: 2%;
    position: relative;
    text-align: center;
}

h3 img {
  width:80%;
  
    height:auto;
    margin:auto
    
}
.slick-next:before, .slick-prev:before {
    
    color: #000;
}
`
