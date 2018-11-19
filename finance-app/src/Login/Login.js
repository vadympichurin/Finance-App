import React, { Component } from 'react';
import { UserContext } from '../UserContext';
import  Button from '../Button/Button';
import {NavLink} from 'react-router-dom';
import './Login.css';

export default class Login extends Component {
    static contextType = UserContext;

    // state = {
    //     email: '',
    //     password: '',
    // };

//     handleChange =e=> {
// this.setState({
//     [e.target.name]: e.target.value,
// });
// };

// handleSubmit = e => {
//     e.preventDefault();
//     this.context.onLogin(this.state);
// };

    render() {
        // console.log(this.context);
        return (
            <div className='login'>
            <span className='loginTextTitle'>Вход</span>
            <form className='loginForm' onSubmit={this.context.handleSubmit}>
            <div>
            <i className="fas fa-at"></i>
                <input className='input' type='email' onChange={this.context.handleChange} name='email' placeholder='Email'/></div>
            <div>
            <i className="fas fa-unlock"></i>
                <input className='input' type='password' onChange={this.context.handleChange} name='password' placeholder='Password'/></div>
            <Button text='Login'/>      
            </form>
            <NavLink className='logintext' to={`/Registration`}>Регистрация</NavLink>
            </div>
        );
    }
}

