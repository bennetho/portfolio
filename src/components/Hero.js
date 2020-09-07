import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../images/IMG_1175.JPG';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typist from 'react-typist';
import {
  FaFacebookMessenger,
  FaLinkedin,
  FaFacebookSquare,
} from 'react-icons/fa';

function Hero() {
  return (
    <header className='hero section'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <div className='underline'></div>
          {/* <h1>Hey</h1> */}

          <Typist
            avgTypingDelay={170}
            startDelay={1000}
            cursor={{ element: '' }}
          >
            <h1>Hey,</h1>
            <h1>I'm Benneth</h1>
            <h5>A web & mobile UI/UX front-end Developer </h5>
          </Typist>
          {/* -----------------hide from small----------- */}
          <aside className='customize-screen'>
            <Link to='/contact' className='btn hero-btn '>
              contact me
            </Link>
          </aside>

          {/* ----------------------hid from big-------- */}
          <aside className='customize'>
            <AnchorLink href='#contact' className='btn hero-btn '>
              contact me
            </AnchorLink>
          </aside>

          {/* ---------------social icon-------- */}
          <ul className='social-icons hero-icons'>
            <li>
              <a
                href='https://m.facebook.com/login.php?next=https%3A%2F%2Fm.facebook.com%2Fbenneth.chiwendu%3Ftsid%3D0.497885996400915%26source%3Dresult&refsrc=https%3A%2F%2Fm.facebook.com%2Fbenneth.chiwendu&_rdr'
                className='social-icon'
                target='_blank'
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/public-profile/in/benneth-ossai-b3b63810a?challengeId=AQH4Na7E-59oGgAAAXP_dn9m1z_HVxwHTTxmHn1ru81QRKkdW0ruF0Imf9XVCgqB-pP6NQV88pqiIBYVIG4gygo6H3iBX6ef7Q&submissionId=06f065dc-cd3c-2c16-ea3a-440197d64a03'
                className='social-icon'
                target='_blank'
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href='https://www.m.me/benneth.chiwendu'
                className='social-icon'
                target='_blank'
              >
                <FaFacebookMessenger />
              </a>
            </li>
          </ul>
        </article>
        <article className='hero-img'>
          <img src={pic} alt='image' className='hero-photo' />
        </article>
      </div>
    </header>
  );
}

export default Hero;
