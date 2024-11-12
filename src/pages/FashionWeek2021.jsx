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

            <h2>Finale Fashion Show Lineup</h2>
            
            <div className="section">
                <h3 className="section-title">Retailers</h3>
                <Dropdown label="La Vie Luchanni" />
                <Dropdown label="ReThreads" />
                <Dropdown label="Trash Vintage" />
                <Dropdown label="August" />
            </div>

            <div className="section">
                <h3 className="section-title">Student Designers</h3>
                <Dropdown label="Nzinga Acosta" />
                <Dropdown label="Mai Nou Her" />
                <Dropdown label="Sarah Troy" />
            </div>
        </div>
    )
}

const Dropdown = ({ label }) => {
    return (
        <div className="dropdown-container">
            <select className="dropdown">
                <option value="" disabled selected>{label}</option>
                <option value="link1">Link 1</option>
            </select>
        </div>
    );
  };

export default FashionWeek2021;