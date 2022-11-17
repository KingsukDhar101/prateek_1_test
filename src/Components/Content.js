import React from 'react';
import "./Content.css";

export const Content = () => {
  return (
    <div className='content'>
      <div className='content_left'>
        <div className='wrapper'>
          <div className='small_text lightgray'>FOR</div>
          <div className="big_text">ONLINE</div>
          <div className="small_text lightgray">ORDER</div>
          <div className='border_bottom_half'></div>
          <div className='large_text'>30%</div>
          <div className='large_text'>OFF</div>
        </div>
        <img src='/images/bag_girl_shopping_excited_holding.png' alt='' />
      </div>
      <div className='content_right'>
        <div className='wrapper'>
          <div className="smaller_text">NEW ARRIVALS</div>
          <div className="large_text" style={{ textAlign: 'center', color:"#EF0564"}}>
            JUST FOR YOU
          </div>

          <div className='border_bottom_full'></div>

          <div className='google_play_wrapper'>
            <a href='https://play.google.com/store/apps/details?id=com.shopify.mobile&hl=en_IN&gl=US' className='google_play_button' style={{ margin: "20px 0",  }} target="_blank">
              <img src='/images/play_store_logo.png' alt='' />
              <div className='small_text'>GET IT ON GOOGLE PLAY</div>
            </a>
            <div style={{}}>Coming Soon</div>
          </div>

        </div>
      </div>
    </div>
  )
}
