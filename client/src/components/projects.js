import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {FiTwitter, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import {FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';


function CountdownTimer() {
    const calculateTimeLeft = () => {
      const difference = +new Date("2020-05-01") - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });
  
    const timerComponents = [];
  
    Object.keys(timeLeft).forEach(interval => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });
  
    return (
        <section>
        
        <div className="col d-flex flex-wrap text-uppercase justify-content-center">
          <h1 className="font-weight-bold align-self-center mx-1">my</h1>
          <h1 className="section-title--special mx-1">portfolio</h1>
        </div>
      
      <div className= " container-fluid subscribe contact text-center text-white">
<div className=" middle col-md-12 mx-auto ">

<div className="boy">
    <h1>COMING SOON</h1>
    <hr/>
    <h2> {timerComponents.length ? timerComponents : <span>Time's up!</span>}</h2>
  </div>

      <p>Stay tuned and subscribe to track my progress. </p>
      
     
     

       <form>
          <div class="form-row justify-content-center">
            <div class="col-auto">
              <input type="text" class="form-control" placeholder="Enter your Email"/>
            </div>
            <div class="col-auto">
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </form>
       
      </div>
</div>
</section>   
    );
  }

  export default CountdownTimer;




  


