import React from "react";
import PropTypes from 'prop-types';

const NavBar = ({ children, className, primary, dark, ...rest }) => {
  let defaultClass = '';
  if(primary) defaultClass = 'bg-blue-500 text-white';
  if(dark) defaultClass = 'bg-gray-800 text-white';
  return (
    <div {...rest} className={`p-2 shadow ${defaultClass} ${className || ""}`}>
      {children}
    </div>
  );
};

NavBar.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  primary: PropTypes.bool,
  dark: PropTypes.bool,
};

export default NavBar;
