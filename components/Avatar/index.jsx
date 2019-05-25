import React from "react";
import PropTypes from 'prop-types';

const Avatar = ({ children, className, rounded, square, image, ...rest }) => {
  let defaultClass = 'rounded-full';
  if(rounded) defaultClass = 'rounded'
  if(square) defaultClass = ''
  return (
    <img
      {...rest}
      src={image}
      className={`w-20 mx-1 inline-block ${defaultClass} ${className ||
        ""}`}
    />
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
  square: PropTypes.bool,
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
};

export default Avatar;
