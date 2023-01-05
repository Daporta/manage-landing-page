import './index.css';
import React from 'react';
import Graphics from './svg-component/heroIlustration'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="left-side">
                    <h1>Bring everyone together to build better products.</h1>
                    <p>Manage makes it simple fot software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                    <button className='hero-btn'>
                        Get Started
                    </button>
                </div>
                <div className="right-side">
                    <Graphics />
                </div>
            </div>
        </section>
    )
}

export default Hero;