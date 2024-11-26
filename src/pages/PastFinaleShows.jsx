import React from "react";
import "../styles/FashionWeek.css"
import { ImageCarousel } from "../components/ImageCarousel";
import data from "../data/finaleShowsData.json";
import Navbar from "../components/Navbar";

function PastFinaleShows() { 
    return (
        <div> className = "finale-show-gallery"
            <h1>Past Finale Show Galleries</h1>

            <div className = "carousel-container">
                <h2>Finale Show 2019</h2>
                {/* Image carousel component for the 2019 show */}
                <ImageCarousel data = {data.slides} />
            </div> 

            <div className = "carousel-container">
                <h3>Finale Show 2018</h3>
                    <ImageCarousel data = {data.slides} />
            </div>
            <div className = "carousel-container">
                <h4>Finale Show 2017</h4>
                    <ImageCarousel data = {data.slides} />
            </div>

            <div className = "video-container">
                <h5>Finale Show 2016</h5>
                    <iframe>
                        src = "https://youtu.be/QUu3-on3AfE"
                        title = "Filame Show 2016 Video"
                        frameborder = "0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    </iframe>   
            </div>        
        </div>
    );
}

export default PastFinaleShows;