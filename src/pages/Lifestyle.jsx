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

function Lifestyle() {
    return(
        <div>
            <Navbar />
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
            <component image="" title="" description="" date=""></component>
        </div>
    )
}

export default Lifestyle;