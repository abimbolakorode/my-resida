import React from 'react'
import './ourExperienceStyle.css';
import OurExp_img from 'assets/ourExp-img.jpg'

const OurExperience= () => {
  return (
    <div className="our_exp_container">
        <div className="boxes_container flex">
            <div className='box1'>
                <img src={OurExp_img} alt="info" className='OurExp_img' />
            </div>
        </div>
        <div className="text flex">
            {'Our Experience guarantees unmatched proficiency and excellence.'}</div>
        </div>
  )
}

export default OurExperience;
