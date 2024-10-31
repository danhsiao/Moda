import '../styles/Archive.css';
import React from "react";
import Navbar from '../components/Navbar';

function Newsletter() {
    return (
      <div className="newsletter-container">
        <div className = "title">
          <h1>Newsletter Archive</h1>
        </div>
  
        <div className="blurb">
          <p>Read all about what we have been up to below and subscribe to our newsletter on our home page!</p>
        </div>
      </div>
    );
  }

function Archive () {
    return (
      <div>
        <Navbar/>
        <div>
            <Newsletter />
        <div className="archive-grid-container">
            <div className="archive-grid-item">
                <p className="archive-name">005 - Updates & Changes Going Forward</p>
                <time datetime="2023-03-24">Mar 24, 2023</time>
            </div>
            <div className="archive-grid-item">
                <p className="archive-name">004 - Start to Spring Semester</p>
                <time datetime="2023-01-27">Jan 27, 2023</time>
            </div>
            <div className="archive-grid-item">
                <p className="archive-name">003 - Moda's Fall Fashion Show</p>
                <time datetime="2022-11-14">Nov 14, 2022</time>
            </div>
            <div className="archive-grid-item">
                <p className="archive-name">002 - So Long October, Hello November</p>
                <time datetime="2022-11-22">Nov 1, 2022</time>
            </div>
            <div className="archive-grid-item">
                <p className="archive-name">001 - Welcome to Moda's Newsletter</p>
                <time datetime="2022-10-21">Oct 21, 2022</time>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Archive;