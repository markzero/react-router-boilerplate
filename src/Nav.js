import React, { Component } from 'react';
import {Link} from 'react-router';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Nav;
