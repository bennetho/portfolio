import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import pic from '../images/IMG_1175.JPG';
import '../components/SideProfile.css';
import {
  FaFacebookMessenger,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebookSquare,
} from 'react-icons/fa';

function SideProfile() {
  return (
    <section className='side-profile'>
      <div className='side-center'>
        <div className='side-info'>
          <span className='side-img'>
            <img src={pic} alt='profile' />
          </span>
          <h4>web developer</h4>

          <h6>
            <a
              href='https://m.facebook.com/login.php?next=https%3A%2F%2Fm.facebook.com%2Fbenneth.chiwendu%3Ftsid%3D0.497885996400915%26source%3Dresult&refsrc=https%3A%2F%2Fm.facebook.com%2Fbenneth.chiwendu&_rdr'
              className='social-icon'
              target='_blank'
            >
              <FaFacebookSquare />
            </a>
            <a
              href='https://www.linkedin.com/public-profile/in/benneth-ossai-b3b63810a?challengeId=AQH4Na7E-59oGgAAAXP_dn9m1z_HVxwHTTxmHn1ru81QRKkdW0ruF0Imf9XVCgqB-pP6NQV88pqiIBYVIG4gygo6H3iBX6ef7Q&submissionId=06f065dc-cd3c-2c16-ea3a-440197d64a03'
              className='social-icon'
              target='_blank'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://www.m.me/benneth.chiwendu'
              className='social-icon'
              target='_blank'
            >
              <FaFacebookMessenger />
            </a>
          </h6>

          <p>+351-920-5070-60</p>
          <p className='map'>
            <FaMapMarkerAlt />
          </p>
          <h5>&copy; {new Date().getFullYear()} copy right</h5>
        </div>
      </div>
    </section>
  );
}

export default SideProfile;
