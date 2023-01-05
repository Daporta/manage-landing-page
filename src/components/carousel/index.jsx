import React, { useState } from 'react'

function carousel({info}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="carousel-container">
        <div className="comment-card">
            <img 
                src={require(`../../images/${info[currentIndex].image}`).default}
                alt={`${info[currentIndex].name} Photo`} 
                className='image' 
            />
            <h3>{info[currentIndex].name}</h3>
            <p>{info[currentIndex].info}</p>
        </div>

      <div className='dots-container'>
        {info.map((slide, slideIndex) => (
            <span 
              key={slideIndex}
              className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(slideIndex)}
            />
        ))}
      </div>
    </div>
  )
}

export default carousel