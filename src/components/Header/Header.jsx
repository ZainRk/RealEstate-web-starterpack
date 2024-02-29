import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <section className="h-wrapper">
    <div className="flexCenter paddings h-container">
      <span>
      <img src="./mariposa.png" alt="logo" width={20}/>
    <a href=""><strong><em>Gift of Faith Consultants</em></strong></a>
      </span>
      
      
      <div className="flexCenter h-menu">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact Us</a>
        <a href="">Projects</a>
        <button className="button">
        <a href="">Contact</a>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Header