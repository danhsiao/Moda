import React from "react"
import Dropdown from "./Dropdown";
import NavbarLink from "./NavbarLink";
import "./Navbar.css"

function Navbar() {
    const FASHION_LINKS = {
        "FASHION WEEK 2022": "fashion-week-2022",
        "FASHION WEEK 2023": "fashion-week-2023",
        "FASHION WEEK 2024": "fashion-week-2024",
    }

    const ISSUES_LINKS = {
        "DIGITAL": "digital",
        "PRINT": "print",
        "MINIS": "minis"
    }

    const SECTIONS_LINKS = {
        "LATEST": "latest",
        "LIFESTYLE": "lifestyle",
        "FASHION": "fashion",
        "CULTURE": "culture",
        "ARTS": "arts"
    }

    const ABOUT_LINKS = {
        "ABOUT MODA": "about",
        "JOIN OUR TEAM": "join",
        "CONTACT US": "contact",
        "NEWSLETTER ARCHIVE": "archive"
    }

    return (
        <div className="navbar-container">
            <nav className="navbar-nav">
                <a className="navbar-title" href="/" id="navTitle">MODA MAGAZINE</a>
                <NavbarLink text="ISSUES" links={ISSUES_LINKS}/>
                <NavbarLink text="SECTIONS" links={SECTIONS_LINKS}/>
                <NavbarLink text="FASHION SHOWS" links={FASHION_LINKS}/>
                <NavbarLink text="ABOUT" links={ABOUT_LINKS}/>
            </nav>
        </div>
    )
}

export default Navbar;
