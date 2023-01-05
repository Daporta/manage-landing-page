import './index.css';
import React from 'react';
import Pattern from '../../images/bg-tablet-pattern.svg';

function banner() {
    return (
        <section className="banner">
            <div className="banner-container">
                <h2>Simplify how your team works today.</h2>

                <button className='banner-btn'>
                    Get Started
                </button>

                <div className="pattern-container">
                    <div className="banner-pattern-left">
                        <img src={Pattern} alt="" />
                    </div>
                    <div className="banner-pattern-right">
                        <img src={Pattern} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default banner