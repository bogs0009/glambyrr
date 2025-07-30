/* import React from 'react';

const About = () => {
  return (
    <section className="section" style={{ backgroundColor: '#e0e0ff' }}>
      <h1>About Section</h1>
    </section>
  );
};

export default About; */
import React from 'react';
import './About.css'; // Create this CSS file
/* import profileImage from 'public/images/rr-photo.jpg'; // Replace with your image path */
import { Element } from 'react-scroll';

const About = () => {
 return (
   <Element name="about">
    <section className="about-section">
     <div className="about-container">
       {/* LEFT: Text */}
       <div className="about-text">
         <h2 className="about-greeting">Hello, I'm RR</h2>
           <p className="about-description">
           With almost over a decade of experience, l've always been drawn to the transformative power of makeup. My aim? To make each client look and feel their absolute best, capturing their essence with a touch of elegance and sophistication.
           <br />
           <br />
           Whether it's a bride on her special day, a model for an editorial spread, or anyone celebrating a significant moment, I'm here to enhance your natural beauty and ensure you feel confident and radiant.
           <br />
           <br />
           I look forward to working with you and bringing my artistry, honed from years of passion and dedication, to your unique vision.
           <br />
           </p>
         <h2 className="about-signature">Rodylyn Robles</h2>
         <p className="about-role">Professional Makeup Artist</p>
       </div>


       {/* RIGHT: Image */}
       <div className="about-image">
         <img src="/images/RR.png" alt="RR Silvestreix" />
       </div>
     </div>
    </section>
   </Element>
 );
};


export default About;
