import React from "react";
import './About.css'

const About=()=>{
    return(
       <div className="about-wrapper">

    <div className="paddings innerWidth flexCenter">
        
        <div className="left flexColCenter  ">
            <div className="image-cont ">
            <img src="./About.jpg"   alt="" />
            </div>
           
        </div>
        <div className="right flexColCenter">
           <div className="about-title paddings">
            <span>About the conference:</span>
            <div className="orange-about" />
            <h1>INSIDER STORIES <br />ACTIONABLE INSIGHTS 
            <br />FROM PRODUCT PEOPLE</h1>
            <p className="about-text">
            We bring together a collection of the brightest minds  to share their  experiences
            <br /> designing,building and managing truly inclusive digital products and experiences
            <br /> With 20+ amazing speakers to be announced, you can be sure that there will 
            <br />be content that resonates with you and improves your product development.
             <br />It’s a conference by makers, for makers. If you want to surround yourself
             <br />
              with those designing, managing, and building truly inclusive digital platforms
              <br /> and experiences - then Canvas is the place for you.
            </p>
           </div>
        </div>
    </div>
       </div>
    )
}

export default About