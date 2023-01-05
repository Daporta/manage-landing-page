import './index.css';
import React, { useState } from 'react';
import Logo from '../../images/logo.svg';
import Hamburger from '../../images/icon-hamburger.svg';
import Close from '../../images/icon-close.svg';
import Pattern from './svg-components/pattern'

function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const toggleMenu = () => {
        setMenuIsOpen(current => !current)
    }

    return (
        <section className="header">
            <div className="header-container">
                <img src={Logo} alt="logo" className="logo" />
                <nav className='nav-desktop'>
                    <ul>
                        <li>Pricing</li>
                        <li>Product</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Community</li>
                    </ul>
                </nav>
                <button className='header-btn'>
                    Get Started
                </button>
                <button className={menuIsOpen === true ? 'menu-btn visible' : 'menu-btn'} onClick={toggleMenu}>
                    <img 
                        src={menuIsOpen === true ? `${Close}` : `${Hamburger}`}
                        alt="menu button" 
                        className="menu-image" 
                    />
                </button>
            </div>

            <div className="background-pattern">
                <div className="relative-div">
                    <Pattern />
                </div>
            </div>

            <div className={menuIsOpen === true ? 'menu-container visible' : 'menu-container'}>
                <div className="menu">
                    <nav className='nav-mobile'>
                        <ul>
                            <li>Pricing</li>
                            <li>Product</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Community</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Header;