import { useState, React } from 'react';
import './Services.css';
import Services_Accordion from '../Accordions/Service_Accordion';



const Services = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
       
            {/*left side*/}
<div className="v-left flexColStart">
    <span className='orangeText'>Our Services</span>
    <span className='primaryText'>What we offer</span>
    <span className='secondaryText'>
    Our services are offered to a wide variety of clients inclusive of private and public property developers, Pension fund organizations, Insurance companies, Commercial and industrial organizations, Local Authorities, Parastatals 
and the Central government. We also service multi-story and single-story residential areas.
    </span>
  
    </div>

     {/**right side */}
     <div className="v-right flexColEnd">
                <div className="service-image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services