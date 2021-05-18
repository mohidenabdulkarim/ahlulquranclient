import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='style2'>
      <div className='container'>
        <div className='logo'>
          <a href='/'>
            <img src='assets/images/logoo.png' alt='logo3.png' style={{ width: '50px' }} />
            <span style={{ marginLeft: '6px' }}>Ahlu Qur'an Academy</span>
          </a>
        </div>
        <nav>
          <div>
            <a className='srch-btn' href='#'>
              <i className='fa fa-search' />
            </a>
            <a href='/register' className='thm-btn brd-rd5'>
              Register Now !
            </a>
            <ul>
              <li className='menu-item-has-children'>
                <a href='#HOME'>Home</a>
              </li>
              <li>
                <a href='#ABOUTUS'>About</a>
              </li>
              <li className='menu-item-has-children'>
                <a href='#SCHOLARS'>Scholars</a>
              </li>
              <li>
                <a href='#SERVICES'>Courses</a>
              </li>
              <li>
                <a href='#CONTACTUS'>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
