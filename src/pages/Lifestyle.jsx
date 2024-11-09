import React from "react";
import '../styles/Lifestyle.css';
import Navbar from "../components/Navbar";

function component(image, title, description, date) {
    return(
        <div>
            
        </div>
    )
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