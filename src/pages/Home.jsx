import React from "react";
import Navbar from "../components/Navbar";
import { ImageCarousel } from "../components/ImageCarousel";
import data from "../data/latestIssuesData.json";

function Home() {
    return (
        <div className="App">
            <div className="title-section">
                <Navbar/>
            </div>
            <div className="under-section">
                <div className="home-text"><h2>Latest Issues</h2></div>
                <ImageCarousel data={data.slides} slidesToShow={1}/>
                <p className="gap"></p>
                <div className="home-text"><h2>Latest Online</h2></div>
                <div className="latest-online">
                </div>
            </div>
        </div>
    )
}

export default Home;