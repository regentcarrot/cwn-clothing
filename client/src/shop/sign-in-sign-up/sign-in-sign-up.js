import React from 'react';
import './sign-in-sign-up-styles.scss';
import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up';


const SignInAndSignUpPage = ()=> (

    <div className='sign-in-sign-up'>
    <SignIn/> 
    <SignUp/>  
    </div>
)

export default SignInAndSignUpPage;