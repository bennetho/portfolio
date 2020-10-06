import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/log-2.png";
import { FaAlignRight } from "react-icons/fa";
import MoveAround from "./MoveAround";

const NavbarBig = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='nav nav-big-display'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img src={logo} alt='portfolio' className='logo-big' />
            </Link>
            <span className='nav-btn' onClick={() => setIsOpen(!isOpen)}>
              <FaAlignRight className='nav-icon' />
            </span>
          </div>
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/project'>projects</Link>
            </li>
            <li>
              <Link to='/contact'>contact</Link>
            </li>
            {/* <li>
              <Link to='/skill'>skills</Link>
            </li> */}
            <li>
              <Link to='/service'>services</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
          </ul>
        </div>
        <MoveAround />
      </nav>
    </>
  );
};

export default NavbarBig;
