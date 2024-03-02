import { React } from 'react';
import './Mission.css';
import Mission_Accordion from '../Accordions/Mission_Accordion';

const Mission = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/**left side */}
            <div className="v-left">
                <div className="image-container">
                    {/* <img src="./r3.png" alt="" /> */}
                </div>
            </div>

            {/* right side*/}
<div className="flexColStart v-right">
    <span className='orangeText'>Our Mission</span>
    <span className='primaryText'>How we serve</span>
    <span className='secondaryText'>
    Gift of Faith Consultants knows that success is determined by a mindset of commitment to delivering excellence, and we have reaped the fruits of that mindset as one of the most successful firms in our type of business today.
    We also deeply believe that there is no limit to excellence, which is why we provide excellent service to each one of our clients on the individual, corporate and governmental levels.
    Lastly, we are flexible in our aim to understand the nature of our clients' challenges, which in turn builds mutual and long lasting relationships. 
    <br/>
    <br/>
    Gift of Faith Consultants' mission is to demonstrate how much we care by going the extra mile to provide quality client-oriented service.
    This is achieved through consistency, integrity, professional service and also by:
    </span>
            <Mission_Accordion/>
            </div>
        </div>
    </section>
  )
}

export default Mission