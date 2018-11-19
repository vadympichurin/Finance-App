import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import  UserContextProvider  from './UserContext'
// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


import { Provider } from 'react-redux';
import store from './redux/store/store';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store/store';

ReactDOM.render(
    <UserContextProvider>
    <Provider store={store}>
        {/* <ConnectedRouter history={history}> */}
            <BrowserRouter>
            <App />
            </BrowserRouter>
        {/* </ConnectedRouter> */}
    </Provider>
    </UserContextProvider>
    ,document.getElementById('root'));
serviceWorker.unregister();
