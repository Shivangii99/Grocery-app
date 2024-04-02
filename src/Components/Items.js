import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Styles.css'
import search from '../photos-lib/search.svg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
function Items() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      nextArrow: <SampleNextArrow />
    };
    return(
        <div className='slider-container'>
        <Slider {...settings} className='items-card'>
            <div className="item i0">Vegetables</div>            
            <div className="item i1"><p>Vegetables</p></div>            
            <div className="item i2">Vegetables</div>            
            <div className="item i3">Vegetables</div>            
            <div className="item i4">Vegetables</div>            
            <div className="item i5">Vegetables</div> 
            <div className="arrow" id="arrowbtn">&gt;</div>           
            <div className="item i6">Vegetables</div>            
            <div className="item i7">Vegetables</div>            
            <div className="item i8">Vegetables</div>            
            <div className="item i9">Vegetables</div>            
            <div className="item i10">Vegetables</div>            
            <div className="item i11">Vegetables</div>            
            <div className="item i12">Vegetables</div>            
        </Slider>
        </div>
    );
    
}
export default Items