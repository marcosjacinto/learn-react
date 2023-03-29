import React from 'react';
import logo from '../assets/react-logo.png'

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" width="10px" />
            <h3>ReactFacts</h3>
            <nav className="App-nav">
                <ul> React Course Project </ul>
            </nav>
        </header>
    )
}

export default Header;
