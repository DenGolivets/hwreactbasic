import React from 'react';
import './footer.css';
import { styled } from '@mui/system';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

import GooglePlayIcon from '../../img/googleplay.png'
import AppStoreIcon from '../../img/appstore.png'

const StyledGrayCircle = styled('div')({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(53,58,58,1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '15px'
});

const Footer = () => {
  return (
    <footer>
      {/* Section 1 (Left) */}
      <div className="footer-section left-section">
        <div className="footer-links">
          <span>Terms of Use</span>
          <span>Privacy-Policy</span>
          <span>FAQ</span>
          <span>Watch List</span>
        </div>
        <div className="copyright">
          <p>©2023 WATCHIT. All Right Reserved. All videos and shows on this platform are trademarks of, and all
            related images and content are the property of, Streamit Inc.
            Duplication and copy of this is strictly prohibited. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Section 2 (Center) */}
      <div className="footer-section center-section">
        <div className="follow-us">
          <p>Follow Us:</p>
        </div>
        <div className="social-icons">
        <StyledGrayCircle className='facehover'>
          <FacebookTwoToneIcon sx={{ width: "30px", height: "30px" }}/>
          </StyledGrayCircle>
          <StyledGrayCircle className='twitterhover'>
            <TwitterIcon />
          </StyledGrayCircle>
          <StyledGrayCircle className='googlehover'>
          <GoogleIcon />
          </StyledGrayCircle>
          <StyledGrayCircle className='githover'>
          <GitHubIcon />
          </StyledGrayCircle>
        </div>
      </div>

      {/* Section 3 (Right) */}
      <div className="footer-section right-section">
        <div className="watchit-app">
          <p>Watchit App</p>
        </div>
        <div className="app-icons">
          <img className='googleic' src={GooglePlayIcon} alt="Google Play" />
          <img className='appic' src={AppStoreIcon} alt="App Store" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;