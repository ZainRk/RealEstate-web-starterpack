import React from "react";
import './Hero.css'
const Hero=()=>{
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth  flexCenter hero-cont0">

                <div className="flexColStart hero-left paddings">
                    
                    <div className="hero-title hero-align">
                        <h2 className="hero-align">10th International Conference</h2>
                        <div className="orange" />
                        <h1>A MULTI-TRACK<br />
                        DIGITAL
                        PRODUCT 
                        <br />
                        CONFERENCE</h1>
                        <div className="date paddings hero-align">
                            <div className="date-format">
                            <span class="material-symbols-outlined">
                            calendar_today
                            </span>
                            <span className="date-text">7th July 2023</span>
                            </div>
                        
                            <div className="date-format">
                            <span class="material-symbols-outlined">
                            map
                            </span>
                            <span className="date-text">NIT Jalandhar</span>

                            </div>
                    
                        </div>

                        <div className="button register">
                            Register Now
                        </div>

                 
                       


                    </div>

                  
                </div>
                <div className="flexCenter hero-right paddings">
                    <div className="image-cont">
                        <img src="./hero-image.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero