import React, { useState, useEffect } from "react"
import "./Card.css"

function Card(props) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, props.delay * 1000);

        return () => clearTimeout(timeout);
    }, [props.delay]);

    return (
        <div className={`gallery-item`}  style={{animationDelay: `${props.delay}s`, visibility: `${isVisible ? 'visible' : 'hidden'}`}}>
            <img src={props.image} alt={props.image} className="gallery-image"></img>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
            <h4>{props.date}</h4>
        </div>
    )
}

export default Card;