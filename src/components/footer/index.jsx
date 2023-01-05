import './index.css';
import React from 'react';
import Logo from '../../images/logo-white.svg';
import Fb from './svg-components/fb';
import Yt from './svg-components/yt';
import Tw from './svg-components/tw';
import Pi from './svg-components/pi';
import Ig from './svg-components/ig';

function footer() {
    return (
        <section className="footer">
            <div className="footer-container">
                <div className="logo-social">
                    <img src={Logo} alt="logo" className="footer-logo" />
                    <div className="social">
                        <Fb />
                        <Yt className='social-logo'/>
                        <Tw className='social-logo'/>
                        <Pi className='social-logo'/>
                        <Ig className='social-logo'/>
                    </div>
                </div>
                <div className="links">
                    <ul className='links-list'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Community</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="subscribe-copyright">
                    <div className="subscribe">
                        <input type="email" className='email-input' placeholder='Updates in your inbox...' />
                        <button className="submit-btn">
                            Go
                        </button>
                    </div>

                    <p>Copyright 2020. All Rights Reserved</p>
                </div>
            </div>
        </section>
    )
}

export default footer