import React from 'react';
import Style from './Navbar.module.css';
import Logo from './logo.png';

export default function Navbar() {
  return (
    <div className={Style.topBar}>
      <div className={Style.topBar_logo}>
        <div className={Style.logo_img}>
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
