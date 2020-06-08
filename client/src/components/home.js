import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/home.css';
import {FaMobileAlt, FaShoppingCart} from "react-icons/fa";
import {FiShoppingCart} from "react-icons/fi";
import ScrollTop from './scrolltop';


const Homepage = ()=> (
<div className="container">
<ScrollTop/>
<section className= "banner">
<div className="banner-bottom"><img src="images/heade.png" /></div> 
<div className="banner-content">
<h1 className="banner-heading">Code Experts</h1>
<button className="banner-btn">
<span className="banner-btn-text-one">Shop Now </span>
<span className="banner-btn-text-two">It's Interesting</span>
</button>

</div>

<div className="slideshow">
   <div className="slideshow-wrapper">
   <div className="slide">
   <img src="images/banner-headset.png" />
   </div>
   <div className="slide">
   <img src="images/banner-grey.png" />
   </div>

   
   </div>

    
   </div>


</section>


<section className="services">
<div className="services-cards">
<div className="services-card"><div className="services-top"><img src="images/responsive.png" className="services-icon"/></div>
<h2 className="services-heading">Responsive Web Apps</h2>
<p className="services-paragraph">hhhd fhfhf shdfg</p>

</div>

<div className="services-card"><div className="services-top"><img src="images/supermarket2.png" className="services-icon"/> </div>
<h2 className="services-heading">Ecommerce Solutions</h2>
<p className="services-paragraph">hhhd fhfhf shdfg</p>

</div>

<div className="services-card"><div className="services-top"><img src="images/uiux.png" className="services-icon"/> </div>
<h2 className="services-heading">UI & UX Solutions</h2>
<p className="services-paragraph">hhhd fhfhf shdfg</p>

</div>

</div>
            
            </section>

            <section className="aboutme">
            <div className="aboutme-contain"></div><div className="aboutme-wrap"><div className="aboutme-title"><h1>About Me</h1></div></div>
            </section>

            <section className="tellus">
            <div className="tellus-cards">
            
            <div className= "mybio"> <h1>Achieve your Business Goals</h1><p>htj ghjgh ghjh gjh jhjgj fjf ghjvjh ghj gjh vjhg fcfh gjh jhgj gj ghjh gjhg ghvfc fcj gfkj gjghh gjh dkhjhfdn bjg bj gkj bkb bhjkbh bkhj bvfg dxr ffjh ;hjggu futy</p></div>
            </div>
            
            
            </section>

            <section className="mysection">
            <div className="mysection-cards">
            <div className="mypic"> <img src= "images/archieve2.png"></img></div>
            <div className= "mybio1"> Achieve your Business Goals<br/>htj ghjgh ghjh gjh jhjgj fjf ghjvjh ghj gjh vjhg fcfh gjh jhgj gj ghjh gjhg ghvfc fcj gfkj gjghh gjh dkhjhfdn bjg bj gkj bkb bhjkbh bkhj bvfg dxr ffjh ;hjggu futy</div>
            </div>
            </section>

           

            <section className="gallery">
            <div className= "thumb-cards"> <div className= "thumb-card"><img src="images/coding3.jpg"/><h3>Open</h3></div>
            <div className= "thumb-card"><img src="images/coding3.jpg"/><h3>Open</h3></div><div className= "thumb-card"><img src="images/coding3.jpg"/><h3>Open</h3></div></div>
            </section>


            <section className="dev-background">
            <h1 className= "heading">Trust the professionals</h1>
            <div className= "devs">
            <div className="dev-cards">
            <div className="dev-card"><div className="dev-top"><img src="images/pete.png" className="team-circle"/> </div>
<h2 className="services-heading">Name</h2>
<p className="services-paragraph">hhhd fhfhf shdfg</p>

</div>

<div className="dev-card"><div className="dev-top"><img src="images/beddy.png" className="team-circle"/> </div>
<h2 className="services-heading">Name</h2>
<p className="services-paragraph">hhhd fhfhf shdfg</p>

</div>
</div>
</div>     
            </section>

                  

</div>


);

export default Homepage;
