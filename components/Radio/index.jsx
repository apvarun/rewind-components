import React from "react";
import PropTypes from 'prop-types';

const Radio = ({ children, className, ...rest }) => {
  return (
    <label className={`p-1 m-1 inline-block cursor-pointer ${className || ""}`}>
      <input
        type="radio"
        className={`mr-2 leading-tight`}
        {...rest}
      >
      </input>
      {children}
    </label>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default Radio;
