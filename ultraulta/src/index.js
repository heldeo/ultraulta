import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Landing from './Landing';
<<<<<<< HEAD
import Results from './Results';
=======
import Results   from './Results';
>>>>>>> 719aa239b443e668ac0800d21d295bcfeac77886

ReactDOM.render(
    <BrowserRouter>
 <App>
    <Switch>
        <Route exact path = "/" component={Landing}/>
        <Route exact path = '/results' component={Results}/>
    </Switch>
</App>,

</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
