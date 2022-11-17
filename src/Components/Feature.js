import React from 'react';
import "./Feature.css";

const Feature = () => {
  return (
    <div className='feature'>
      <div className="big_text">Feature</div>
      <div className="small_text">Find new cloth outlets near you or in your city</div>
      <div className='feature_container'>
        <div className='feature_wrapper'>
          <img src='/images/girl_withbag.png' alt='' />
          <div className='feature_text'>WOMEN</div>
        </div>
        <div className='feature_wrapper'>
          <img src='/images/man_1.png' alt='' />
          <div className='feature_text'>MEN</div>
        </div>
        <div className='feature_wrapper'>
          <img src='/images/kids_1.png' alt='' />
          <div className='feature_text'>KIDS</div>
        </div>
      </div>
    </div>
  )
}

export default Feature