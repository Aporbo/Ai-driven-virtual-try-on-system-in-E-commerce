import React from 'react'
import './Banner.css'
import arrow_icon from '../Assets/arrow.png'
import Banner_image from '../Assets/banner_image.png'


const Banner = () => {
  return (
    <div className = 'Banner'>

        <div className="Banner-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="Banner-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>

        </div>

      <div className="Banner-right">
      <img src={Banner_image} alt="" />
      </div>


    </div>
  )
}

export default Banner
