import React from 'react' 
import './Header.css'
const Header=()=>{
    return(
        <section className='h-wrapper'>
            <div className='flexCenter padding innerWidth h-container'>
                <div className="orange-icon"/>
                <h1>Conference</h1>

                <div className="flexCenter h-menu">
                    <a href="">
                        Home
                    </a>
                    <a href="">
                       Speakers
                    </a>
                    <a href="">
                        Committee
                    </a>
                 
                    <button className="button">
                        <a href="">Contact</a>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Header