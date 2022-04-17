import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='container'>
            <nav>
                <div className="logo">
                    <img src="https://i.ibb.co/BNW6M78/logo.png" alt="" />
                </div>
                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog"> Blog </Link>
                </div>
            </nav>

        </div>
    );
};

export default Header;