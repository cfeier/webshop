import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Details from "./details/game-details";
import Welcome from "./welcome/welcome";
import Games from "./games/games";
import Cart from "./cart/cart";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <App />
            <Route exact path="/" component={Welcome} />
            <Route path="/games" component={Games} />
            <Route path="/details/:id" component={Details} />
            <Route path="/cart" component={Cart} />
        </div>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
