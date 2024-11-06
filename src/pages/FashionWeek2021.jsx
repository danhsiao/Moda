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
            <h3>Retailers</h3>
            <h3>La Vie Luchanni   ReThreads   Trash Vintage   August </h3>
            <h3>Student Designers </h3>
            <h3>Nzinga Acosta   Mai Nou Her   Sarah Troy</h3>
        </div>
    )
}

export default FashionWeek2021;