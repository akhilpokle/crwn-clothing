import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email : '',
            password : '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName,email,password,confirmPassword} = this.state;

        if(password != confirmPassword){
            alert('passwords dont match');
            return;
        }

        try{
            const{user} = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName: '',
                email : '',
                password : '',
                confirmPassword: ''
            })
        }catch(error){
            console.log(error);
        }
    }

    handleChange = event => {
        const {name,value} = event.target;

        this.setState({name:value});
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sing-up'>
                <h2>I do not have a account</h2>
                <span>Sign up with your emal and password</span>
                <form className='sign-up-form' onSubmit = {this.handleSubmit} >
                    <FormInput name='displayName' type='text' value={displayName} onChange = {this.handleChange} label='Display Name' required>
                    </FormInput>
                    <FormInput name='email' type='email' value={email} onChange = {this.handleChange} label='email' required>
                    </FormInput>
                    <FormInput name='password' type='password' value={password} onChange = {this.handleChange} label='password' required>
                    </FormInput>
                    <FormInput name='confirm password' type='password' value={confirmPassword} onChange = {this.handleChange} label='confirm password' required>
                    </FormInput>
                    <CustomButton type="submit">Sign Up </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;