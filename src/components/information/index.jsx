import './index.css';
import React from 'react';
import Pattern from './svg-component/pattern';

function Information() {
    const informationData = [
        {
            id: 1,
            title: 'Track company-wide progress',
            info: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progess at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
        },

        {
            id: 2,
            title: 'Advanced built-in reports',
            info: 'Set internal delivery estimates and track progess toward company goalls. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
        },

        {
            id: 3,
            title: 'Everything you need in one place',
            info: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
        }
    ]
    return(
        <section className="information">
            <div className="information-container">
                <div className="info-left-side">
                    <h2>What's different about Manage?</h2>
                    <p>Manage provides all the functionality your team needs, without the complexity. Our sofware is tailor-made for modern digital product teams.</p>
                </div>
                <div className="info-right-side">
                    {informationData.map(info =>{
                        return (
                        <div 
                            className='info-card'
                            key={info.id}
                        >
                            
                            <p>
                                <span 
                                    className="infoId-bg"
                                >
                                    {'0'+info.id}
                                </span>
                            </p>
                            
                            <div className="title-info">
                                <h3>{info.title}</h3>
                                <p>{info.info}</p>
                            </div>
                        </div>)
                    })}
                </div>
                <div className="info-background-pattern">
                    <div className="info-relative-div">
                        <Pattern />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information;