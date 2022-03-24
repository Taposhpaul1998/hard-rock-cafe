import React from 'react';
import logo from '../../logo/hard-rock-cafe-g371408422_640.jpg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className="header-conteiner">
                <div className='header-log'>
                    <img src={logo} alt="" />
                </div>
                <div className="header-menu">

                    <a href="/home">Home</a>
                    <a href="/servies">Servies</a>
                    <a href="/about">About</a>

                </div>
            </div>
        </nav>
    );
};

export default Header;