import { React } from 'react';
import './About.css';
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css"
import data from '../../utils/services_accordion_data'

import {MdOutlineArrowDropDown} from 'react-icons/md';



const About = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
       
            {/*left side*/}
          
            <div className="images_container">
            <div className="about-image-container">
                    <img src="./value.png" alt="" />
                </div>
                <div className="about-image-container2">
                    <img src="./r1.png" alt="" />
                </div>
            </div>
      <br/>
      <br/>


     {/**right side */}
    
        </div>


        <div className='v-wrapper'>
        <span className='orangeText flexColCenter'>About</span>
        <div className="flexCenter">
   
    <div className='secondaryText flexColCenter'>
    Founded in 2006, Gift of Faith Consultants is a Civil and Structural Engineering Consultancy which researches, designs, supervises,<br/>
     manages and commissions Civil and Structural Engineering projects. Gift of Faith Consultants was registered in December 2006 as <br/>
     Gift of Faith Enterprises (Pvt.) Ltd. The company’s shareholders are Engineer Kudzanai Nyikayaramba and Choice Nyikayaramba.<br/>

     The Principal Officers in Gift of Faith Consultants are Registered Fellow Members of the Zimbabwe Institute of Engineers (ZIE), <br/>
      Engineering Council of Zimbabwe (ECZ) as well as Zimbabwe Association of Consulting Engineers (ZACE).The composition of the<br/>
      consultancy brings together skills and experience in Civil Engineering, Structural Engineering as well as Project Planning and Management.<br/>
    </div>
    </div>
        </div>
    </section>
  )
}

export default About