import React from 'react'
import logo from '../gasstation1.png';
import './Navigation.css'

const Navigation = (props) => (
    <nav className="navbar navbar-dark bg-dark">
      <a  className="text-white">
          { props.title }
      </a>
      <img src={logo} className="App-logo" alt="logo" />
    </nav>
)
export default Navigation;
