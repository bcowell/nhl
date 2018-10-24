import React from 'react';
import './Navbar.css';

const Navbar = () => 
    <div className="navbar">
        <div className="left">
            <a href="/" className="logo">Home</a>
        </div>
        <div className="right">
            <a href="/teams" className="logo">Teams</a>
        </div>
    </div>

export default Navbar;