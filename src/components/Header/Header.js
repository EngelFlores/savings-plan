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
      <h1 className="header__title">Let's plan your
        <strong> saving goal.</strong>
      </h1>
    </div>
  );
};

export default Header;
