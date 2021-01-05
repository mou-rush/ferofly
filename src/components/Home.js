import React from 'react'
import "./Home.css"

import home_bg from "../assets/images/home-bg.webp";

function Home() {
    return (
        <div>
            <h1 className="company-name">Ferofly</h1>
           <div id="hr"> <h5 id="slogan">—Magnify your Journey—</h5></div>
            <img src={home_bg} alt="home-bg"/>
        </div>
    )
}

export default Home;
