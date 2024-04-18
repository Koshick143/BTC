import React, { useState } from 'react';
import '../styles/navbar.css';
import line from '../assets/three line menu.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const smallScreenElements = document.querySelectorAll('.small-screen');
    smallScreenElements.forEach(element => {
      element.classList.toggle('show');
    });
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-list-box">

          {/*  CAN USE ROUTER TO NAVIGATE THROUGH DIFFERENT PAGES IN FUTURE */}
          <img className='icon' src={line} alt="" onClick={toggleMenu} />

          <div className='list-items small-screen'>Home</div>
          <div className='list-items small-screen'>About</div>
          <div className='list-items small-screen'>Tokenomic</div>
          <div className='list-items small-screen'>Whitepaper</div>
          <div className='list-items small-screen'>Community</div>
          <div className='list-items small-screen'>Mint</div>

          {/* 
          <div className="nav-btn list-items">
              Connect Wallet
          </div> */}

        </div>
      </div>
    </>
  );
}
