import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/log-2.png';
import { FaAlignRight } from 'react-icons/fa';
import MoveAround from './MoveAround';
// import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handeleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='nav nav-small-display'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img src={logo} alt='portfolio' />
            </Link>
            {/* <span className='nav-btn' onClick={() => setIsOpen(!isOpen)}> */}
            <span className='nav-btn' onClick={handeleOpen}>
              <FaAlignRight className='nav-icon' />
            </span>
          </div>
          <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link
                to='service'
                smooth={true}
                onClick={handeleOpen}
                duration={1000}
                offset={-480}
              >
                service
              </Link>
            </li>
            <li>
              <Link
                to='project'
                smooth={true}
                onClick={handeleOpen}
                duration={1000}
                offset={-420}
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                to='contact'
                smooth={true}
                onClick={handeleOpen}
                duration={2100}
                offset={-300}
              >
                contact
              </Link>
            </li>
            <li>
              <Link
                to='skills'
                smooth={true}
                onClick={handeleOpen}
                duration={2300}
                offset={-350}
              >
                skills
              </Link>
            </li>
            <li>
              <Link
                to='about'
                smooth={true}
                onClick={handeleOpen}
                duration={1000}
                offset={-300}
              >
                about
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <MoveAround />
    </>
  );
};

export default Navbar;
