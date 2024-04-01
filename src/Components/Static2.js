import React from 'react'
import './Styles.css'
import sPhoto2 from '../photos-lib/static-2.png'
import Design from '../photos-lib/Rectangle 44.png'

export const Static2 = () => {
  return (
    <div>
      <div className="static-2">
            <div className="static-img-2">
                <img src={sPhoto2} alt="vegetables bowl"/>
                <img className="design" src={Design} alt="design"/>
            </div>
            <div className="static-head-2">
                <h3><span>Let's go</span> for today's best offers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Explore Now</button>
            </div>
        </div>
    </div>
  )
}

