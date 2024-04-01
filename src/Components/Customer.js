import React from 'react'
import './Styles.css'
import Beauty from '../photos-lib/Beauty_Tips___Tricks__DIY_Hacks_for_Face__Healthy_Hair___Glowing_Skin-removebg-preview 1.png'
import Female from '../photos-lib/Female13.png'

const Customer=()=> {
  return (
    <div>
      <div className="customer-contain">
            <div className="cust-head">
                <h3>Happy Customers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos vitae dolorem beatae voluptatum aspernatur est, amet laborum.</p>
                <div className="cust-btn">
                    <button>&lt;</button>
                    <button>&gt;</button>
                </div>
            </div>
            <div className="cust-img">
                <img className="frame" src={Beauty} alt="1"/>
                <img className="female" src={Female} alt="2"/>
            </div>
        </div>
    </div>
  )
}

export default Customer
