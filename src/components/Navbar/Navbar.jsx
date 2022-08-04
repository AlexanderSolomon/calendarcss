import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillCloseCircle} from 'react-icons/ai';

import image from '../../constants/images';
import './Navbar.css'; 
import { useState } from 'react';
import images from '../../constants/images';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = React.useState(false);

return(
  <nav className='app_navbar'>
  <div className='app_navbarlogo'>
    {/* <img src={images.eglogo} alt="image of the logo" /> */}
  </div>
  <ul className='app_navbar-links'>
    <li className='p_fontdiff'><a href='#home'>Home</a> </li>
    <li className='p_fontdiff'><a href='#about'>About</a> </li>
    <li className='p_fontdiff'><a href='#menu'>Menu</a> </li>
    <li className='p_fontdiff'><a href='#awards'>Awards</a> </li>
    <li className='p_fontdiff'><a href='#contact'>Contact</a> </li>
  </ul>
  <div className='app_navbar-smallscreen'>
    <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setToggleMenu(true)}/>
   
   {toggleMenu && (
    <div className='app_navbar-smallscreen_overlay flex_center slide_bottom'>
    <AiFillCloseCircle color='#fff' fontSize={27} className="overlay_close" onClick={()=> setToggleMenu(false)}/>
    <ul className='app_navbar-smallscreen-links'>
    <li className='p_fontdiff'><a href='#home'>Home</a> </li>
    <li className='p_fontdiff'><a href='#about'>About</a> </li>
    <li className='p_fontdiff'><a href='#menu'>Menu</a> </li>
    <li className='p_fontdiff'><a href='#awards'>Awards</a> </li>
    <li className='p_fontdiff'><a href='#contact'>Contact</a> </li>
  </ul>
  </div>
   )}
 
  </div>
</nav>
)
}
 


export default Navbar;
