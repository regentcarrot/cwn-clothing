import React from 'react';
import './sign-up.styles.scss';
import {auth, createUserProfileDocument} from './../../firebase/firebase.utils';
import FormInput from './../form-input/form-input';
import CustomButton from './../custom-button/custom-button';

class SignUp extends React.Component{
constructor(){
    super();

    this.state= { 
                displayName: '',
                email:'',
                password: '',
                confirmPassword:''}
}

handleSubmit= async event =>{

    event.preventDefault();
    const {displayName, email, password,confirmPassword}= this.state;

    if(password!==confirmPassword){
alert ('passwords do not match')

return;
}

try{
const {user}= await auth.createUserWithEmailAndPassword(email, password)

await createUserProfileDocument(user, {displayName});

this.setState({
displayName: '',
email:'',
password: '',
confirmPassword:''})

}catch (error){console.log(error)}

}

handleChange=(event)=> {
event.preventDefault();
const {name,value}= event.target;
this.setState({[name]: value})

}

render(){
    const {displayName, email, password,confirmPassword}= this.state;
return (
<div className='sign-up'>
<h2 className='title'>I do not have account</h2>
<span>Sign up with your email and password</span>
<form className='sign-up-form' onSubmit={this.handleSubmit}>
<FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display name' required/>

<FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required/>

<FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required/>

<FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>
<CustomButton type='submit'>Sign Up</CustomButton>
</form>

</div>



)




}

}

export default SignUp;