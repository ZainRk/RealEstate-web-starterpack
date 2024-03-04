import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <section className="h-wrapper">
    <div className="flexCenter paddings h-container">
      <span>
      <img src="./mariposa.png" alt="logo" width={75}/>
    <a href=""className='companyName'><strong><em>Gift of Faith Consultants</em></strong></a>
      </span>
      
      
      <div className="flexCenter h-menu">
        <a href="">Home</a>
        <a href="">Projects</a>
        {/* <a href="">Mission</a> */}
        <a href="">Team</a>
        <a href="">About</a>
        <button className="button">
        <a href="">Contact</a>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Header