import { useState, React, useEffect } from 'react';
import './Accordion.css';
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


const Services_Accordion = ()=>{

    <Accordion
    className='accordion'
    allowMultipleExpanded={true}
    // preExpanded={[0]}
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

}

export default Services_Accordion;