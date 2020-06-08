import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import Devs from './data';

const PeopleContext= React.createContext();

class PeopleProvider extends React.Component {
state={
people: [],
sortedpeople: [],
featuredpeople: [],
type:"all",
capicity: 1,
price:0,
minPrice:0,
maxPrice:0,
minSize:0,
maxSize:0,
breakfast: false,
pets: false,

}

componentDidMount(){
let people= Devs;
console.log(people)
let featuredpeople= people.filter((person)=> {return person.featured===true});

let maxPrice= Math.max(...people.map(item=>{
return item.salary

}));

let maxSize= Math.max(...people.map(item=>{
        return item.contract
        
        }))
        

console.log(maxPrice);
console.log(maxSize);
this.setState({
people,
featuredpeople, 
sortedpeople:people,
price: maxPrice,
maxPrice,
maxSize
});

}

// formatdata(items){
//         let tempitems=items.map((item)=>{
//         let person= item;
        
//         return {...person}
//         })
        
//         return tempitems

//         }

handleChange=(event)=> {
const target=event.target
const value= event.type==='checkbox'? target.checked: target.value;

const name= event.target.name;

this.setState({
        [name]:value
}, this.filterPeople)


}
filterPeople=()=>{

       let {people,type, capacity, minSize, maxSize, minPrice, maxPrice, breakfast, pets} = this.state

       let tempPeople= people;

       if(type!=="all"){
               console.log('working')
tempPeople= tempPeople.filter((person)=>{return person.type===type})

       }

       this.setState({sortedpeople:tempPeople})
}



    render() {

        return (
<PeopleContext.Provider value={{...this.state, handleChange:this.handleChange}}>
{this.props.children}
</PeopleContext.Provider>


        )}

}

const PeopleConsumer= PeopleContext.Consumer;

export {PeopleProvider, PeopleContext, PeopleConsumer};
