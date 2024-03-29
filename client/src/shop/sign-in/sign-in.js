import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
constructor(props){
super(props);

this.state= {

    email:'',
    password: ''
}

}

handleSubmit=async (e)=>{
e.preventDefault();

const {email, password}=this.state;

try{
    await auth.signInWithEmailAndPassword(email, password);
    this.setState({email: '', password:''})
}catch (error){
    console.log(error);
}

this.setState({email:'', password:''})


}

handleChange=(event)=>{
const {name, value}= event.target

this.setState({[name]: value})

}

render() {
return (
<div className="sign-in">
<h2>I already have an account</h2>
<span>Sign in with your email and password</span>

<form onSubmit={this.handleSubmit}>
<FormInput name='email'  type='email' placeholder="email" handleChange={this.handleChange} value={this.state.email} required/>

<FormInput name='password'  placeholder="password" type='password' handleChange={this.handleChange} value={this.state.password} required/>

<CustomButton type='submit'> Sign In </CustomButton>

<CustomButton onClick= {signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>

</form>

</div>





)




}



}


export default SignIn;