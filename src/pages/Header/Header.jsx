import React from 'react';
import { SubHeading } from '../../components';

import {images} from "../../constants"

import './Header.css';

const Header = () => (
  <div className='app_header app__wrapper section__padding' id='home'>
    <div className='app_wrapper_info'>
<SubHeading title="Billing for Doctors"/> 
    <h1 className='app_header-h1'>Make your billing easy</h1>
    {/* <p className='p__opensans' style={{margin:'2rem 0'}}>this is a section where we talk about someting specific</p> */}
   <button type='button' className='custom__button'>Explore Pricing</button>
    </div>

    <div className='app__header-img'>
<img src={images.accountpic} alt="header img" />
    </div>
  </div>
  
); 

export default Header;
