import './index.css';
import React from 'react';
import Carousel from '../carousel'

function comments() {

    const comments = [
        {
            image: 'avatar-anisha.png',
            name: 'Anisha Li',
            info: '"Manage has supercharged our team\'s workflow. The ability to maintain visibility on target milestones at all times keeps everyone motivated."'
        },

        {
            image: 'avatar-ali.png',
            name: 'Ali Bravo',
            info: '"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."'
        },

        {
            image: 'avatar-richard.png',
            name: 'Richard Watts',
            info: '"Manage allows us to provide structure and process. It keeps us organized and focused. I can\'t stop recommending them to everyone I talk to!."'
        },

        {
            image: 'avatar-shanai.png',
            name: 'Shanai Gough',
            info: '"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the wole team in-sync without being intrusive."'
        },
    ]
    return (
        <section className="comments">
            <div className="comments-container">
                <h2>What they've said</h2>

                <div className="comments-card-container">
                    {comments.map((comment, index) => {
                        return (
                            <div 
                                className="comment-card" 
                                key={index}
                            >
                                <img 
                                    src={require(`../../images/${comment.image}`).default}
                                    alt={`${comment.name} Photo`} 
                                    className='image' 
                                />
                                <h3>{comment.name}</h3>
                                <p>{comment.info}</p>
                            </div>
                        )
                        
                    })}
                </div>

                <Carousel info={comments}/>

                <button className='comments-btn'>
                    Get Started
                </button>
            </div>
        </section>
    )
}

export default comments 