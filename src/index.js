import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import CreatePhysio from './CreatePhysio';
import Dashboard from './Dashboard';
import CreatePatient from './CreatePatient';
import PatientDatabase from './PatientDatabase';

function App() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Login} />
            <Route exact path='/CreatePhysio' component={CreatePhysio} />
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/CreatePatient' component={CreatePatient} />
            <Route exact path='/PatientDatabase' component={PatientDatabase} />
        </BrowserRouter>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
