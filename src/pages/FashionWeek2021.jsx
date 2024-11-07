import React from "react";
import '../styles/FashionWeek.css';
import Navbar from "../components/Navbar";

function FashionWeek2021() {
    return (
        <div>
            <Navbar/>
            <h1>UW Fashion Week April 12-16, 2021</h1>
            <iframe 
                src="https://www.youtube.com/embed/uucNjZjlCOQ">
            </iframe>
            <h2>Finale Fashion Show Lineup</h2>
            <p class="lineupCategory2021"><i>Retailers</i></p>
            <p class="lineup2021"><i>La Vie Luchanni    ReThreads    Trash Vintage    August </i></p>
            <p class="lineupCategory2021"><i>Student Designers</i></p>
            <p class="lineup2021"><i>Nzinga Acosta   Mai Nou Her    Sarah Troy</i></p>
        </div>
    )
}

export default FashionWeek2021;