import React, { Component, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext({
    user: {
        email: null,
        avatar: null,
    },
    onLogin: () => null,
    onLogout: () => null,
    onRegister: () => null,
});

export default class UserContextProvider extends Component {
    static Consumer = UserContext.Consumer;

    state = {
        isLogged: false,
        id: null,
        email: null,
        password: null,
        passwordRepeat: null,
        error: false,
    };

    onLogin = credentials => {
     axios.post('#')  
     .then(info => this.setState({
         email: info.data.user.email,
         password: info.data.user.password 
     }))
     .catch(err => console.log(err))
    }

    onLogout =()=> {
        this.setState({
            isLogged: false,
            email: null,
            password: null,
            passwordRepeat: null,
            
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.onLogin(this.state);
        // this.setState({
        //     isLogged: true,
        // })
    };

    onRegister = e => {
        e.preventDefault();
{this.state.password === this.state.passwordRepeat ?
    this.setState({
        isLogged: true,
        error: false
    })
 : this.setState({
    error: true,
})};

// axios.post('#', {email: this.state.email, password: this.state.password} )
// .then(info => this.setState({
//     isLogged: true,
//     error: false
// }))
// .catch(err => console.log(err))
    }

    render() {
        return (
         <UserContext.Provider
         value={{
             user: {
                 isLogged: this.state.isLogged,
                 email: this.state.email,
                 password: this.state.password,
                 passwordRepeat: this.state.passwordRepeat,
                 error: this.state.error,
                 id: this.state.id,

             },
             onLogin: this.onLogin,
             onLogout: this.onLogout,
             onRegister: this.onRegister,
             handleChange: this.handleChange,
             handleSubmit: this.handleSubmit,
         }}>
         {this.props.children}
         </UserContext.Provider>  
        );
    }
}