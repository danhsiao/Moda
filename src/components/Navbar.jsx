import React from "react"
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar-nav">
                <a className="navbar-title" href="/" id="navTitle">MODA MAGAZINE</a>
                <a href="/issues">ISSUES</a>
                <a href="/sections">SECTIONS</a>
                <a href="/fashion-week-2022">FASHION SHOWS</a>
                <a href="/about">ABOUT</a>
            </nav>
        </div>
    )
}

export default Navbar;
