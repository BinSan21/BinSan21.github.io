import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', fontSize: '1.1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <EmailIcon style={{ color: '#5000ca' }} />
              <a href="mailto:binyusoph.sansarona@g.msuiit.edu.ph" style={{ color: 'inherit', textDecoration: 'none' }}>
                binyusoph.sansarona@g.msuiit.edu.ph
              </a>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <LocationOnIcon style={{ color: '#5000ca' }} />
              <span>Brgy. Tibanga, Iligan City, 9200</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;