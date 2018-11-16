import React from 'react';
import Button from '../Button/Button';
import UserContext from '../UserContext';
import {NavLink} from 'react-router-dom';
import './Registration.css';

const Registration = (props) => (
    <UserContext.Consumer>
{context => (
<div className='register'>
            <span className='registerTextTitle'>Регистрация</span>
            <form className='registerForm' onSubmit={context.onRegister}>
            <div>
            <i className="fas fa-at"></i>
                <input className='input' type='email' onChange={context.handleChange} name='email' placeholder='Email'/></div>
            <div>
            <i className="fas fa-unlock"></i>
                <input className='input' type='password' onChange={context.handleChange} name='password' placeholder='Password'/></div>
                <div>
            <i className="fas fa-unlock"></i>
                <input className='input' type='password' onChange={context.handleChange} name='passwordRepeat' placeholder='Repeat password'/></div>
                {context.user.error ? <span>Вы ввели неверный пароль!!!</span> : null}
            <Button text='Sign'/>      
            </form>
            <NavLink className='logintext' to={`/`}>Вход</NavLink>
            </div>
)}

    </UserContext.Consumer>
);

export default Registration;