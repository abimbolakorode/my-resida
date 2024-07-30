import React from 'react';
import  './heroSectionStyle.css';
import Button from 'shared/button';
// import bgImage from 'assets/hero-section-bg.jpeg'//
import backgroundImage from 'assets/hero-section-bg.jpeg'

const HeroSection = () => {
  return (
    <div className={'hero_section_container'} style={{ backgroundImage: `url(${backgroundImage})` }}>
       <div className="hero_section_content">
            <p>Finding the perfect home has never been this easy!</p>
        <span>
          {'Eliminate stressful house searches. We link you with Lagos finest and most affordable residences- <strong>Zero agent fees, middle men payments & hassle.</strong>'}
        </span>
  
        <div className="btn_container">
          <Button style={{ width: '32%' }} btnName={'Download our App'} />
          <Button style={{ width: '32%' }} outline btnName={'Learn more'} />
        </div>
      </div>
    </div>
    );
};

export default HeroSection;


