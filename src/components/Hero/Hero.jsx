import React from 'react';
import"./Hero.css";
import CountUp from 'react-countup';



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
        <div className="flexCenter stats">
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={88000} end={90000} duration={4}/> 
                    <span>+</span>
                    </span>
                    <span className='secondaryText'>Premium Products</span>
            </div>

            <div className="flexColCenter stat">
                <span>
                    <CountUp start={1950} end={1999} duration={4}/> 
                    <span>+</span>
                    </span>
                    <span className='secondaryText'>Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
                <span>
                    <CountUp end={28} duration={4}/> 
                    <span>+</span>
                    </span>
                    <span className='secondaryText'>Award Winning</span>
                </div>

            <div/>
          </div>
        </div>



        {/* right side */}
        <div className="flexCenter hero-right">
            <div className="image-container">
                <img src="./UMC3.jpg" alt=""/>
            </div>
        </div>

    </div>
   </section>
  )
}

export default Hero;