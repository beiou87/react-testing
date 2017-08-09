import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ leftContent, children, rightContent }) => (
  <div className="nav-bar">
    <div className="nav-bar-left">{leftContent}</div>
    <div className="nav-bar-title">{children}</div>
    <div className="nav-bar-right">{rightContent}</div>
  </div>
);

NavBar.propsType = {
  leftContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  leftConrightContenttent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export default NavBar;
