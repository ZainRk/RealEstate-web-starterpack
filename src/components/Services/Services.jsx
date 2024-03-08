import { React } from 'react';
import './Services.css';
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
    <Accordion
    className='accordion'
    allowMultipleExpanded={true}
    >
        {
            data.map((item,i)=>{
                return(
                    <AccordionItem className='accordionItem' key={i} uuid={i}>
                        <AccordionItemHeading>
                            <AccordionItemButton className='flexCenter accordionButton'>
                                <div className="flexCenter icon">
                                    {item.icon}
                                </div>
                                <span className="primaryText">
                                    {item.heading}
                                </span>
                                <div className="flexCenter icon">
                                    <MdOutlineArrowDropDown size={20}/>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                        <p className='secondaryText'>{item.detail}</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                )
            })
        }
    </Accordion>
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