import { useState, React } from 'react';
import './Mission.css';
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css"
import data from '../../utils/mission_accordion'

import {MdOutlineArrowDropDown} from 'react-icons/md';



const Mission = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/**left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>

            {/* right side*/}
<div className="flexColStart v-right">
    <span className='orangeText'>Our Mission</span>
    <span className='primaryText'>How we serve</span>
    <span className='secondaryText'>
    Gift of Faith Consultants knows that success is determined by a mindset of commitment to delivering excellence, and we have reaped the fruits of that mindset as one of the most successful firms in our type of business today.
    We also deeply believe that there is no limit to excellence, which is why we provide excellent service to each one of our clients on the individual, corporate and governmental levels.
    Lastly, we are flexible in our aim to understand the nature of our clients’ challenges, which in turn builds mutual and long lasting relationships. 
    <br/>
    <br/>
    Gift of Faith Consultants' mission is to demonstrate how much we care by going the extra mile to provide quality client-oriented service.
    This is achieved through consistency, integrity, professional service and also by:
    </span>
    <Accordion
    className='accordion'
    allowMultipleExpanded={false}
    preExpanded={[0]}
    >
        {
            data.map((item,i)=>{
                const [className, setClassName] = useState(null);

                return(
                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                        <AccordionItemHeading>
                            <AccordionItemButton className='flexCenter accordionButton'>
                                <AccordionItemState>
                                    {({expanded})=> expanded ? setClassName("expanded"): setClassName("collapsed")}
                                </AccordionItemState>



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
        </div>
    </section>
  )
}

export default Mission