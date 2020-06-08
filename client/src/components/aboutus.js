import React from 'react';
import ReactDOM from 'react-dom';
import Boottest from './boottest';
import Nav2 from './testnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollTop from './scrolltop';
import Thuli from './thuli';
import Team from './team';
import Corousel from './corousel';
import {FaArrowDown, FaArrowAltCircleDown} from "react-icons/fa";
import Contact from './contact';
import Footer from './footer';
import Slick from './slick';
import Services from './services';
import CountdownTimer from './projects';
import Reviews from './reviews';
import PeopleContext from './context';
import Devs from './data';

const developer= Devs.map((dev)=> {
    return dev.name;
   
    
     })

const AboutUs = ()=> (
    <PeopleContext.Provider value={developer}>
<div>
<Corousel/>
<div className="container-fluid">
    <div className="row"><div className="col"><img src="images/heade.png" className="corousel-bottom img-fluid"/></div></div>
</div>

<div className="container">
    <div className="row"><div className="col-10 mx-auto"><div className="text-center"><a href="" className="btn primary-color header-link"><FaArrowDown className="arrow"/></a></div>
    
    </div></div>
</div>

<ScrollTop/>
<Boottest/>
<Thuli/>
<Services/>
<Team/>
<CountdownTimer/>
<Reviews/>
<Contact/>
<Slick/>
<Footer/>

</div>
</PeopleContext.Provider>

);

export default AboutUs;
