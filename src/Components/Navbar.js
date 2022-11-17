import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  const scrollTo = (name) => {
    const featureElement = document.querySelector(`.${name}`);
    featureElement.scrollIntoView({ behavior: "smooth", block: "end"});
    console.log("f-e: ", featureElement);
  };
  return (
    <div className='nav'>
      <div className='nav_shop_logo'>
        <img src='/images/Icon/shop.png' alt='' />
      </div>
      <div className='nav_logo_title'>SHOPPEE</div>
      <button className='nav_title active_nav' name="content" style={{ marginLeft: "auto", }} onClick={() => { scrollTo("content"); }}>Home</button>
      <button className='nav_title' name="feature" onClick={() => { scrollTo("feature"); }}>Features</button>
      <button className='nav_title' name="about" onClick={() => { scrollTo("about"); }}>About</button>
      <button className='nav_title' name='contact' onClick={() => { scrollTo("contact"); }}>Contact Us</button>

    </div>
  )
}

export default Navbar