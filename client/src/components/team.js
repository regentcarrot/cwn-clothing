import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
// import PeopleContext from './context';
import {PeopleProvider, PeopleContext, PeopleConsumer} from './context1';




class Team extends React.Component {

//  const developer= useContext(PeopleContext)
static contextType= PeopleContext;

render()

//    const me= developer[0];
{
   const value= this.context;
   let {people}= value
   console.log(people);
   
   return (
  
   <section className="team ">
   
      <div className="container">
      <h2 class="card-title text-center text-white pt-5 pb-5">Trust the professionals</h2>
       <div className="row d-flex justify-content-center">
           <div className="col-lg-4 col-md-4 col-sm-6">
           <div className="card bg-transparent wow fadeInUp text-center border-0 slow mt-2">
           <a><img src="images/pete.png" className="img-fluid rounded-circle shadow" alt="img"/></a>
           <div className="card-body bg-transparent"><a href="#"><h5 className="card-title  mb-md-0"></h5>{/*{people[0].name}*/}</a>
           <p className="card-text">React Specialist</p>
           </div>
           </div>
           </div>

           <div className="col-lg-4 col-md-4 col-sm-6">
           <div className="card bg-transparent wow fadeInUp text-center border-0 slow mt-2">
           <a><img src="images/pete.png" className="img-fluid rounded-circle shadow" alt="img"/></a>
           <div className="card-body bg-transparent"><a href="#"><h5 className="card-title  mb-md-0">Peter</h5></a>
           <p className="card-text">React Specialist</p>
           </div>
           </div>
           </div>
       </div>
       
       
        
      </div>
    </section>
    

   )
}
}



export default Team;



