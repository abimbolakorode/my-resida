import React from 'react'
import './subHeroSectionStyle.css';
import Button from 'shared/button';
import { GoArrowRight } from "react-icons/go";
import { MdBorderColor } from 'react-icons/md';

const SubHeroSection = () => {
  return (
    <section className='sub_hero_section_container'>
     <div className='sub_hero_text'>
      <h3>Resida nullifies the hassles of agents</h3>
      <p>Save properties, create alerts and keep track of the enquiries you send to agents.</p>
     </div>
     <div className='sub_hero_cta'>
      <Button style={{
        backgroundColor: '#DBA94D',
        color: '#1f4b43',
        padding: '5px 10px',
      
      }}
      btnName={"Download our App"} 
      rightIcon={<GoArrowRight size={22} style={{ verticalAlign: 'middle' }} />}/>
     </div>
    </section>
  );
};

export default SubHeroSection;