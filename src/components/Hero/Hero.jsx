import React from 'react'
import"./Hero.css"

const Hero = () => {
  return (
   <section className='hero-wrapper'>
    <div className="paddings innerWidth flexCenter hero-container">
     {/* left side */}
        <div className="flexColStart hero-left">
            <div className="hero-title">
                <h1><em>A Spirit of excellency</em> <br/><em>equals excellent products!</em><br/></h1>
            </div>

            <div className="flexColStart hero-des">
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