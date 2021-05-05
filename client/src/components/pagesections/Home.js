import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

function Home() {
    return (
        <>
        <div className="home">
            <h1 className="homeheader">WELCOME TO MY PORTFOLIO:</h1>
            <Link to="" className="projects">
                <h1 className="headeer">p</h1>
            </Link>

            <Link to="" className="about">
                <h1 className="headeer">a</h1>
            </Link>

            <Link to="" className="skills">
                <h1 className="headeer">s</h1>
            </Link>

            <Link to="" className="tools">
                <h1 className="headeer">t</h1>
            </Link>

            <Link to="" className="contact">
                <h1 className="headeer">c</h1>
            </Link>
        </div>
            
        </>
    )
}

export default Home
