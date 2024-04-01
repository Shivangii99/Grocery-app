import React from "react"
import './Styles.css'
import sPhoto from '../photos-lib/static.png'

export const Static=()=> {
  return (
    <div>
      <div className="static">
            <img src={sPhoto} alt="vegetables"/>
            <div class="static-head">
                <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Explore</button>
            </div>
        </div>
    </div>
  )
}

