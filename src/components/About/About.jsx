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
<div>
    <h1>About</h1>
<div className="row">
  <div className="history_column">
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div className="mission_column">
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
  <div className="services_column">
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>
</div>
</div>
  )
}

export default About