import React from 'react'
import './Card.css'

function Card({ image, children }) {
    return (
        <div className='card'>
            <div className="card-image">
                <img src={image} alt="first-image" />
            </div>
            <div className="card-info">
                {children}
            </div>
        </div>
    )
}

export default Card
