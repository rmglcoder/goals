import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Goal Tracker Logo" className="logo" />
                </Link>
                <h1 className="title">Goal Tracker</h1>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/goals">Goals</Link>
                    <Link to="/progress">Progress</Link>
                </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">Search</button>
                </div>
            </div>
            <div className="tagline-container">
                <p className='tagline'>Make a progress everyday.</p>
            </div>
        </header>
    );
};

export default Navbar;
