import React from 'react';
import ReactDOM from 'react-dom';
import Slick from './slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './gallery';
import Modal from './modal';
import AnimationPage from './logobounce';
import Services from './services';
import CountdownTimer from './projects';
import Reviews from './reviews';
import Team from './team';
import Gal from './gal2';
import {PeopleProvider, PeopleContext, PeopleConsumer} from './context1';
import PeopleContainer from './peopleContainer';
import FeaturedPeople from './featuredpeople';



class Portfolio extends React.Component{


render() { return (

    <PeopleProvider>
<div><Slick/>
<Gallery/>
<Modal/>
<AnimationPage/>
<Team/>
<CountdownTimer/>
<Reviews/>
<Services/>
<Gal/>
<FeaturedPeople/>
<PeopleContainer/>
</div>
</PeopleProvider>



)};

}
export default Portfolio;
