import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import {PeopleProvider, PeopleContext, PeopleConsumer} from './context1';



class Gal extends React.Component{

render(){ 
    
    return(

    <PeopleConsumer>{(value=> 
        
        {

          let {featuredpeople} = value
        let developer= featuredpeople.map((person)=>{

        return <div key={person.id} className=" col-lg-6  my-3 my-lg-3">
        <div className="gallery-img-container">
          <img
            src={person.url}
            className="img-fluid gallery-img"
            alt="gallery img"
          />
          <a href="#" className="text-capitalize gallery-info p-2">room</a>
          <span className="gallery-icon">
            <FaPlus/>
          </span>
        </div>
      </div>
        })
console.log(developer)
  
return <section id="gallery" className="gallery py-5">
<div className="container">
<div className="row">
       
       {developer}
            
            
         
          </div>
          </div>

</section>
})}

</PeopleConsumer>

)}

}


export default Gal;