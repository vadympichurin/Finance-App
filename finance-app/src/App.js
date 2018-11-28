import React, { Component } from 'react';
import Categories from './Categories/Categories';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './UserContext';

import './App.css';

class App extends Component {
  static contextType = UserContext;
  render() {
    console.log(this.context.user.isLogged);
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
        {/* <Route exact path='/' render={props => <Login {...props}/>}/> */}
        
        <Route exact path='/' render={(props) => (
          localStorage.getItem('isLogged') ? ( <Redirect to='/dashboard'/>) : (<Login {...props}/>))}/>
        <Route path="/Registration" render={(props) => (
            localStorage.getItem('isLogged') ? (<Redirect to="/dashboard"/>) : (<Registration {...props}/>))}/>
        <Route path="/dashboard" render={(props) => (
            localStorage.getItem('isLogged') ? (<Categories/>) : (<Redirect to='/'/>))}/>
        {/*<Route exact path='/' render={(props) => (*/}
          {/*this.context.user.isLogged ? ( <Redirect to='/dashboard'/>) : (<Login {...props}/>))}/>*/}

        {/* <Route path='/Registration' render={props => <Registration {...props}/>}/> */}
        {/*<Route path="/Registration" render={(props) => (this.context.user.isLogged ? (<Redirect to="/dashboard"/>) : (<Registration {...props}/>))}/>*/}
        {/*<Route path="/dashboard" render={(props) => (this.context.user.isLogged ? (<Categories/>) : (<Redirect to='/'/>))}/>*/}

      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;


