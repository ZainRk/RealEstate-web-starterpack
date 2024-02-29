import React from 'react'
import"./Hero.css"

const Hero = () => {
  return (
   <section className='hero-wrapper'>
    <div className="paddings innerWidth flexCenter hero-container">
     {/* left side */}
        <div className="hero-left">
            <div className="hero-title">
                <h1>SPIRIT OF EXCELLENCY <br/>EQUALS EXCELLENT PRODUCT<br/></h1>
            </div>

            <div className="hero-des">
            <span><br/>Gift of Faith Consultants is a distinguished Civil and Structural
<br/>Engineering consultancy that specializes in research, design, supervision,<br/> management, and commissioning of Civil and Structural Engineering projects. </span>
            <span></span>
        </div>

        </div>



        {/* right side */}
        <div className="flexCenter hero-right">
            <div className="image-container">
                <img src="./hero-image.png" alt=""/>
            </div>
        </div>

    </div>
   </section>
  )
}

export default Hero;