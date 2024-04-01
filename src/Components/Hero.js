import React from 'react'
import './Styles.css'
// import './Styles1.css'
import hPhoto from '../photos-lib/How_Much_of_the_Nutrients_in_Your_Diet_Are_You_Absorbing_-removebg-preview 1.png'

export const Hero=()=>{
    return(
        <div className='parent'>
        <div class="hero-section">
            <div class="heading-sec">
            <h3><span>Welcome</span> to the world of Green and Fresh Vegetables</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt sunt iure.</p>
            <div class="btn-contain">
                <button>Discounts</button>
                <button>Contact Us</button>
            </div>
            </div>
            <div class="hero-img">
                <img src={hPhoto} alt="vegetable photo"/> 
            </div>
        </div>
        </div>
    );
}