import React, { useEffect, useState } from 'react';
import "./ContactUs.css";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import $ from 'jquery';

const ContactUs = () => {
  // const { innerWidth,} = window;?
  // const [widthState, setWidthState] = useState(window.innherWidth);

  useEffect(()=>{
    const width = window.innerWidth;
    // console.log("width: ",width);
    if(width <= 425){
      const google = document.querySelector('.getItOnGoogle');
      google.innerHTML = "Google";
      console.log("425");
    }


  },[]);
  return (
    <div className='contact'>
      <div className='contact_wrapper' style={{ margin: "10px 0", }}>
        <div className='contact_wrapper_part'>
          <div className='big_text' style={{ marginBottom: "7px" }}>CONTACT</div>
          <div className='small_text'>EMAIL</div>
        </div>
        <div className='contact_wrapper_part'>
          <div className='big_text' style={{ marginBottom: "7px" }}>FOLLOWS US ON</div>
          <div className='small_text' style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "80%", color: 'white', fontSize: "18px" }}>
            <div><AiOutlineInstagram /></div>
            <div><RiFacebookCircleFill /></div>
            <div><AiOutlineTwitter /></div>
            <div><BsLinkedin /></div>

          </div>
        </div>
        <div className='contact_wrapper_part'>
          <div className='big_text' style={{ marginBottom: "7px" }}>LEGAL</div>
          <div className='small_text'>Privacy Policy</div>
          <div className='small_text'>Terms & Conditions</div>
        </div>
        <div className='contact_wrapper_part'>
          <div className='big_text' style={{ marginBottom: "7px" }}>AVAILABLE AT</div>
          <a href='https://play.google.com/store/apps/details?id=com.shopify.mobile&hl=en_IN&gl=US' className='google_play_button' target="_blank">
            <img src='/images/play_store_logo.png' alt='' />
            <div className='small_text getItOnGoogle'>GET IT ON GOOGLE PLAY</div>
          </a>
        </div>

      </div>
      <div style={{ margin: "10px 3%" }}>
        <div className='big_text' style={{ marginBottom: "7px" }}>WE ARE AVAILABLE IN</div>
        <div className='small_text' style={{ marginBottom: "3px" }
        }>AGRA</div>
        <div className='small_text'>DELHI &#40;Soon&#41;	</div>
      </div>
      <div className='contact_copyright'><BiCopyright />2022</div>
    </div>
  )
}

export default ContactUs