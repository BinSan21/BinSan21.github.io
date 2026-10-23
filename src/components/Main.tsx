import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from '../assets/images/received_950219686235366.jpeg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Binyusoph Sansarona" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/BinSan21" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/binyusoph-sansarona-8a09022a1" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Binyusoph Sansarona</h1>
          <p>BS Computer Applications Student, Major in Embedded Systems</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/BinSan21" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/binyusoph-sansarona-8a09022a1" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;