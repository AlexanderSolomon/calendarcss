import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="gletter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt="devider" />
        <p className='p__opensans'>here is ome text about the firm</p>
        <button type='button' className='custom__button'>learn more</button>
      </div>

      <div className='app__about-us content_knife flex__center'>
<img src={images.knife} alt="knifepic" />
      </div>
      
      <div className='app__aboutus-content_story'>
        <h1 className='headtext__cormorant'>Experience</h1>
        <img src={images.spoon} alt="devider" />
        <p className='p__opensans'>here is ome text about the firm</p>
        
      </div>
    </div>
  </div>
);

export default AboutUs;
