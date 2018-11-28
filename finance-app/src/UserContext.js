import React, {Component, createContext} from 'react';
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
        axios.get(`http://localhost:3001/api/log/${this.state.email}?password=${this.state.password}`)
        // .then(function(res){ console.log(res) })
        // .catch(function(res){ console.log(res) })
        //     .then(info => console.log(info.data))
            .then(info => {
                let id = localStorage.getItem("id")
                // if (id !== info.data.map(el => el._id))
                localStorage.setItem("id", info.data.map(el => el._id));
                localStorage.setItem("isLogged", true);
                this.setState({
                    id: localStorage.getItem("id"),
                    isLogged: true
                })

            })

            .catch(err => console.log(err))
    }

    onLogout = (e) => {
        localStorage.setItem("id", "");
        localStorage.setItem("isLogged", "");
        localStorage.setItem("period", []);
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
        if (this.state.password === this.state.passwordRepeat) {
            axios.post('http://localhost:3001/api/reg', {
                login: this.state.email,
                email: this.state.email,
                password: this.state.password
            })
            // .then(function(res){ console.log(res) })
            // .catch(function(res){ console.log(res) })
            //     .then(info => console.log(info.data))
                .then(info => {
                    console.log(info.data)
                    localStorage.setItem("id", info.data._id);
                    localStorage.setItem("isLogged", true);
                    this.setState({
                        id: localStorage.getItem("id"),
                        isLogged: true,
                        error: false
                    })

                })
                .catch(err => console.log(err))
        } else {
            this.setState({
                error: true,
            })}

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