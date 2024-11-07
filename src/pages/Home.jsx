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
                <h2>Latest Issues</h2>
                <ImageCarousel data={data.slides}/>
            </div>
        </div>
    )
}

export default Home;