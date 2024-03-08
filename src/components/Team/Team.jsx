import React from 'react'
import './Team.css'
// Import all of Bootstrap's CSS
import * as bootstrap from 'bootstrap'

const Team = () => {
  return (
    <div>
      <h1>Meet the Team!</h1>
      <div className='super-container'>
      <div className="row">
      <div className="container">
      <div className="text-section">
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
        </div>
          <div className="image-section">
            <img className="card-img-top" src="./businesswoman.jpeg" alt="" />
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
       </div>
      </div>
      <br/>
      <br/>

      <div className='super-container'>
      <div className="row">
      <div className="image-section-c">
      <div className="text-section">
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
        </div>
      <div className="container-b">
      <div className="text-section">
      <img className="card-img-top" src="./businesswoman.jpeg" alt="" />
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
        </div>
       </div>
       
      </div>
      <br/>
      <br/>
      <div className='super-container'>
      <div className="row">
      <div className="container">
      <div className="text-section">
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
        </div>
          <div className="image-section">
            <img className="card-img-top" src="./businesswoman.jpeg" alt="" />
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
       </div>
      </div>
      <br/>
      <br/>

      <div className='super-container'>
      <div className="row">
      <div className="image-section-c">
      <div className="text-section">
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
        </div>
      <div className="container-b">
      <div className="text-section">
      <img className="card-img-top" src="./businesswoman.jpeg" alt="" />
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
        </div>
       </div>
       
      </div>
      <br/>
      <br/>


    </div> 
  )
}

export default Team