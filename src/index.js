import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import Login from './Login';
import About from './About';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <IndexRoute component={Login}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
