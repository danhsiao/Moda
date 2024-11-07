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
    return (
        <div className="navbar-container">
            <nav className="navbar-nav">
                <a className="navbar-title" href="/" id="navTitle">MODA MAGAZINE</a>
                <a href="/issues">ISSUES</a>
                <a href="/sections">SECTIONS</a>
                <a href="/fashion-week-2022">FASHION SHOWS</a>
                <NavbarLink text="FASHION SHOWS" links={FASHION_LINKS}></NavbarLink>
                <NavbarLink text="test"></NavbarLink>

            </nav>
        </div>
    )
}

export default Navbar;
