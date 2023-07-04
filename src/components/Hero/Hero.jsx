import React from "react";
import './Hero.css'
const Hero=()=>{
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth  flexCenter hero-cont0">

                <div className="hero-left"></div>
                <div className="flexCenter hero-right">
                    <div className="image-conatiner">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}