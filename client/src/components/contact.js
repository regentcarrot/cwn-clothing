import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import {FaArrowDown, FaArrowAltCircleDown} from "react-icons/fa";



export default class Contact extends React.Component{



    render() {
    
    return (<section className= "contact pt-5 pb-4">
        
        <div className="container">
        <br/><br/>
        <h2 className="card-title text-center text-white m-bottom-">Ready to get started?</h2>
        <p className="text-center text-white mb-5">Nemo enim psam voluptatem quia voluptas aspernatur blandit tempus.</p>
        <div className="contact_overlay position-absolute"><img src="./images/heade-bottom-shape.png" alt="img" className="img-fluid"/></div>
        <div class="row d-flex justify-content-center"><div class="col-md-8">


        <form className="needs-validation text-center" id="contactForm">
        <div className="form-row ">
        <div className="col-md-6">
        <label for="validationCustom01"></label>
        <input type="text" className="form-control paddy rounded-sm border-0" id="validationCustom01" placeholder="Your name" required="" value=""/>
        <div className="valid-feedback">Looks good!</div></div>
        <div className="col-md-6">
        <label for="validationCustom02"></label>
        <input type="text" className="form-control paddy rounded-sm border-0" id="validationCustom02" placeholder="Last name" required="" value=""/>
        <div className="valid-feedback">Looks good!</div></div>
        <div className="col-md-6">
        <label for="validationCustom03"></label>
        <input type="email" className="form-control paddy rounded-sm border-0" id="validationCustom03" placeholder="Email" required="" value=""/>
        <div className="valid-feedback">Looks good!</div></div>
        <div className="col-md-6">
        <label for="validationCustom04"></label>
        <input type="tel" className="form-control paddy rounded-sm border-0" id="validationCustom04" placeholder="Telephone No" required="" value=""/>
        <div className="valid-feedback">Looks good!</div></div>


         <div class="col-md-12">
                              <div class="form-group">
                                  <label for="form_message"></label>
                                  <textarea id="form_message" name="message" className="form-control" placeholder="Your Message" rows="4" data-error="Please, leave us a message."></textarea>
                                  <div className="help-block with-errors"></div>
                              </div>
                          </div>
        </div>
        <button class="btn-success btn-lg wow zoomIn rounded-sm slow mt-5 border-0" type="submit">let's talk</button>
        </form>
        

        </div>
        </div>
        </div>

     
        
        </section>


)
}
}