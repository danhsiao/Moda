import React from "react"
import "./Card.css"

function Card(props) {
    return (
        <div className="gallery-item">
            <img src={props.image} alt={props.image} className="gallery-image"></img>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
            <h4>{props.date}</h4>
        </div>
    )
}

export default Card;