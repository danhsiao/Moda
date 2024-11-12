import React from "react";
import '../styles/Lifestyle.css';
import Navbar from "../components/Navbar";

function component(image, title, description, date) {
    return(
        <div className="gallery-item">
        <img src={image} alt={image} className = "gallery-image"></img>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h4>{date}</h4>
        </div>
    );
}

function allLifeStyleComponents(data) {
    for (let i =0; i < data.length; i++) {
        <component image = {data[i].image} title = {data[i].title} description = {data[i].description} date = {data[i].data}/>
    }
}

function Lifestyle() {

    return(
        <div>
            <Navbar />
            <allLifeStyleComponents data = {JSON.parse(lifestyledata.json)}/>
        </div>
    )
}

export default Lifestyle;