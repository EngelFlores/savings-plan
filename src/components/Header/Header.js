import './Header.css';
import React from 'react';
import logo from '../../icons/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={ logo }
      />
    </div>
  );
};

export default Header;
